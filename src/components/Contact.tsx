import React, { useState, ChangeEvent, FormEvent } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
  };

  return (
    <section id='contact'>
      <h2>Contact Me</h2>
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
    </section>
  );
};

export default Contact;
