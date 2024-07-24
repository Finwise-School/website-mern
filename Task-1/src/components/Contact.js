import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form
      console.log('Form submitted');
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:px-8 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Need Help ?</h1>
          <p className="text-gray-700 mb-8">
            Connect with us for personalized financial guidance. Our experts are here to help you achieve your financial goals and secure your future.
          </p>
          <img src="../img/contact-img.jpg" alt="Support Illustration" className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 md:px-8">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Get in touch!</h2>
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
          </form>
        </div>
      </div>
      <style>
        {`
          .error-message { 
            color: red; 
            font-size: 0.875rem; /* Tailwind class for text-sm */
          }
        `}
      </style>
    </div>
  );
};

export default Contact;
