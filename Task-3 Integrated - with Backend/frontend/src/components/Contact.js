import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import contactus from "../assets/images/contact/contact-img.jpg";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(''); // State to show success message

  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (!name.trim()) {
      errors.name = 'Name is required';
      valid = false;
    }

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Valid email is required';
      valid = false;
    }

    if (!subject.trim()) {
      errors.subject = 'Subject is required';
      valid = false;
    }

    if (!message.trim()) {
      errors.message = 'Message is required';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Make a POST request to the backend
        const response = await axios.post('http://localhost:5000/api/contact', {
          name,
          email,
          subject,
          message,
        });

        if (response.status === 201) {
          setSuccessMessage('Form submitted successfully!');
          setName(''); // Reset the form fields
          setEmail('');
          setSubject('');
          setMessage('');
          setErrors({}); // Clear any existing errors
        }
      } catch (error) {
        console.error('There was an error submitting the form:', error);
        setErrors({ submit: 'There was an issue submitting the form. Please try again.' });
      }
    }
  };

  return (
    <div style={{ marginTop: "60px" }} className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:px-8 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Need Help ?</h1>
          <p className="text-gray-700 mb-8">
            Connect with us for personalized financial guidance. Our experts are here to help you achieve your financial goals and secure your future.
          </p>
          <img src={contactus} alt="Support Illustration" className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 md:px-8">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Get in touch!</h2>
          {successMessage && <p className="success-message">{successMessage}</p>}
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-4 bg-gray-100 rounded-md border border-gray-300"
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 bg-gray-100 rounded-md border border-gray-300"
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full p-4 bg-gray-100 rounded-md border border-gray-300"
              />
              {errors.subject && <p className="error-message">{errors.subject}</p>}
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-4 bg-gray-100 rounded-md border border-gray-300"
              />
              {errors.message && <p className="error-message">{errors.message}</p>}
            </div>
            <button type="submit" className="bg-black text-white px-6 py-4 rounded-md flex items-center">
              <i className="fas fa-paper-plane mr-2"></i> Send
            </button>
            {errors.submit && <p className="error-message">{errors.submit}</p>}
          </form>
        </div>
      </div>
      <style>
        {`
          .error-message { 
            color: red; 
            font-size: 0.875rem; /* Tailwind class for text-sm */
          }
          .success-message { 
            color: green; 
            font-size: 0.875rem; /* Tailwind class for text-sm */
            margin-bottom: 1rem;
          }
        `}
      </style>
    </div>
  );
};

export default Contact;
