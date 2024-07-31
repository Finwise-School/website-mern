import React, { useState, useEffect, useRef } from 'react';
import 'flatpickr/dist/flatpickr.css';
import Flatpickr from 'react-flatpickr';
import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';
import bookcallimg from "../assets/images/book/call-img.avif";
import { Link } from "react-router-dom";

const Book = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState([]);
  const [preferredTime, setPreferredTime] = useState([]);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (!fullName.trim()) {
      errors.fullName = 'Full Name is required';
      valid = false;
    }

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Valid Email is required';
      valid = false;
    }

    if (!phone.trim()) {
      errors.phone = 'Valid Phone Number is required';
      valid = false;
    }

    if (preferredDate.length === 0) {
      errors.preferredDate = 'Preferred Date is required';
      valid = false;
    }

    if (preferredTime.length === 0) {
      errors.preferredTime = 'Preferred Time is required';
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

  const phoneInputRef = useRef();

  useEffect(() => {
    intlTelInput(phoneInputRef.current, {
      initialCountry: 'in',
      utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
    });
  }, []);

  return (
    <div style={{ marginTop: "60px" }} className="max-w-7xl mx-auto py-16 px-4 md:px-8 flex flex-col md:flex-row items-center md:items-start">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img src={bookcallimg} alt="Support Illustration" className="w-full h-auto" />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl md:text-4xl font-bold text-blue-600 mb-4 flex items-center">
          <i className="fas fa-phone mr-2"></i> Book a Call !
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-4 bg-gray-100 rounded-md border border-gray-300"
            />
            {errors.fullName && <p className="error-message">{errors.fullName}</p>}
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 bg-gray-100 rounded-md border border-gray-300"
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div>
            <input
              id="phone"
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-4 bg-gray-100 rounded-md border border-gray-300"
              ref={phoneInputRef}
            />
            {errors.phone && <p className="error-message">{errors.phone}</p>}
          </div>
          <div>
            <Flatpickr
              id="preferredDate"
              name="preferredDate"
              placeholder="Preferred Date"
              value={preferredDate}
              onChange={(date) => setPreferredDate(date)}
              options={{ dateFormat: 'j F Y' }}
              className="w-full p-4 bg-gray-100 rounded-md border border-gray-300"
            />
            {errors.preferredDate && <p className="error-message">{errors.preferredDate}</p>}
          </div>
          <div>
            <Flatpickr
              id="preferredTime"
              name="preferredTime"
              placeholder="Preferred Time"
              value={preferredTime}
              onChange={(time) => setPreferredTime(time)}
              options={{ enableTime: true, noCalendar: true, dateFormat: 'h:i K' }}
              className="w-full p-4 bg-gray-100 rounded-md border border-gray-300"
            />
            {errors.preferredTime && <p className="error-message">{errors.preferredTime}</p>}
          </div>
          <button type="submit" className="bg-black text-white px-6 py-4 rounded-md flex items-center">
            <i className="fas fa-phone mr-2"></i> Book Now
          </button>
        </form>
      </div>
      <style>
        {`
          .iti {
            width: 100% !important;
          }
          .error-message {
            color: red;
            font-size: 0.875rem; /* Tailwind class for text-sm */
          }
        `}
      </style>
    </div>
  );
};

export default Book;
