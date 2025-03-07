import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  return (
    <section id='contact'>
      <h2>Contact Me</h2>
      <form className='contact-form'>
        <label>Name: </label>
        <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          placeholder='Enter your name'
          required
        />

        <label>Email:</label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          placeholder='Enter your email'
          required
        />

        <label>Message: </label>
        <textarea
          id='message'
          name='message'
          value={formData.message}
          placeholder='Enter your message'
          required
        ></textarea>

        <button type='submit' className='submit-btn'>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
