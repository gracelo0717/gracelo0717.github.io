import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import Footer from './Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    const formspreeUrl = 'https://formspree.io/f/moveqeaz';

    const sendFormData = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await axios.post(formspreeUrl, sendFormData, {
        headers: {
          Accept: 'application/json',
        },
      });
      console.log(response);

      if (response.status === 200) {
        setStatusMessage('Form submitted successfully!');
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => {
          setStatusMessage('');
        }, 5000);
      }
    } catch (error) {
      console.log(error);
      setStatusMessage('Error submitting the form. Please try again!');

      setTimeout(() => {
        setStatusMessage('');
      }, 5000);
    }

    setIsSubmitting(false);
  };

  return (
    <section id='contact'>
      <h2 className='contact-heading'>Get in Touch</h2>
      <h3 className='contact-subheading'>
        Want to work together, ask a question, or just say hi? Go for it!
      </h3>
      <form className='contact-form' onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Enter your name'
          required
        />

        <label>Email:</label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter your email'
          required
        />

        <label>Message: </label>
        <textarea
          id='message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          placeholder='Enter your message'
          required
        ></textarea>

        <button type='submit' className='submit-btn' disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {statusMessage && <p>{statusMessage}</p>}
      <Footer />
    </section>
  );
};

export default Contact;
