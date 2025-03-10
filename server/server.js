const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Backend server is working');
});

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const formspreeUrl = 'https://formspree.io/f/moveqeaz';

  const formData = {
    name: name,
    email: email,
    message: message,
  };

  try {
    const response = await axios.post(formspreeUrl, formData, {
      headers: {
        Accept: 'application/json',
      },
    });
    console.log('Form submitted successfully:', response.data);
    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.log('Error submitting form:', error);
    res
      .status(500)
      .json({ message: 'Failed to submit form', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
