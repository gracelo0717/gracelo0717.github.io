import React from 'react';

const Contact = () => {
  return (
    <section id='contact'>
      <h2>Contact Me</h2>
      <form className='contact-form'>
        <label>Name: </label>
        <input
          type='text'
          id='name'
          name='name'
          placeholder='Enter your name'
        />

        <label>Email:</label>
        <input
          type='email'
          id='email'
          name='email'
          placeholder='Enter your email'
        />

        <label>Message: </label>
        <textarea
          id='message'
          name='message'
          placeholder='Enter your message'
        ></textarea>

        <button type='button' className='submit-btn'>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
