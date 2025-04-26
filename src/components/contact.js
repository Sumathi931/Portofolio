import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactME = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    emailjs
      .send('service_gsfh45j', 'template_y64dt6c', formData, '6erlan7TF6QEvupv9')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setFormData({ name: '', email: '', message: '' });
        alert('Submitted successfully');
      })
      .catch((err) => {
        console.error('Failed to send email. Error:', err);
      });
  };

  return (
    <div className="contact-main-container">
      <div className="contact-left">
        <h2 className="contact-heading">Contact Me</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>

      <div className="contact-right">
        <div className="quote">
          <p>“Your next big thing starts here.”</p>
        </div>
        <div className="social-icons">
          <a href="https://github.com/Sumathi931" target="_blank" rel="noopener noreferrer">
            <FaGithub size={40} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactME;
