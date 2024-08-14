import React, { useState, useRef, useEffect } from 'react';
import 'flatpickr/dist/flatpickr.css';
import Flatpickr from 'react-flatpickr';
import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';
import SuccessModal from './Success'; // Ensure this is the correct import

const Book = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState([]);
  const [preferredTime, setPreferredTime] = useState([]);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:5000/api/book', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: fullName,
            email,
            phone,
            date: preferredDate[0], // Send date as string
            time: preferredTime[0], // Send time as string
          }),
        });

        const data = await response.json();
        console.log('Response:', data);

        if (response.ok) {
          setSuccessMessage('Call booked successfully!!');
          setModalOpen(true);
          setFullName('');
          setEmail('');
          setPhone('');
          setPreferredDate([]);
          setPreferredTime([]);
          setErrors({});
        } else {
          setErrors({ submit: 'Failed to book a call. Please try again.' });
        }
      } catch (error) {
        console.error('Error:', error);
        setErrors({ submit: 'Server error. Please try again later.' });
      }
    }
  };

  const phoneInputRef = useRef(null);

  useEffect(() => {
    if (phoneInputRef.current) {
      intlTelInput(phoneInputRef.current, {
        initialCountry: 'in',
        utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
      });
    }
  }, []);

  useEffect(() => {
    if (phoneInputRef.current) {
      phoneInputRef.current.addEventListener('change', (event) => {
        setPhone(event.target.value);
      });
    }
  }, [phoneInputRef]);

  return (
    <div style={{marginTop: "60px"}} className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-r from-white-700 to-indigo-700 text-white">
      <div className="bg-white text-gray-800 shadow-2xl rounded-lg overflow-hidden max-w-4xl w-full flex flex-col md:flex-row fade-in hover-glow transition-shadow duration-500">
        
        {/* Image Section */}
        <div className="md:w-1/2 relative">
          <img className="h-full w-full object-cover" src="https://media.istockphoto.com/id/1086346530/photo/happy-support-center-worker-working-on-his-computer.jpg?s=612x612&w=0&k=20&c=zeWfgByXKxiXbsEdfvbCXjDvlG-mVa7rb0NNPnA1wX0=" alt="Book a Call" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6 space-y-4">
            <h2 className="text-4xl font-bold text-white z-10">Request Early Access</h2>
            <p className="text-lg text-gray-200 z-10">Let's discuss how we can help you achieve your financial goals.</p>
          </div>
        </div>
        
        {/* Form Section */}
        <div className="md:w-1/2 p-10 flex flex-col justify-center bg-wave">
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-lg font-semibold text-white">Name</label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter your name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 bg-gray-200 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
            </div>
            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-lg font-semibold text-white">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-200 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            {/* Phone */}
            <div className="space-y-2">
              <label htmlFor="phone" className="text-lg font-semibold text-white">Phone</label>
              <br></br><input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                ref={phoneInputRef}
                className="w-full px-4 py-3 bg-gray-200 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Date */}
            <div className="space-y-2">
              <label htmlFor="preferredDate" className="text-lg font-semibold text-white">Date</label>
              <Flatpickr
                id="preferredDate"
                placeholder="Preferred Date"
                value={preferredDate}
                onChange={(date) => setPreferredDate(date)}
                options={{ dateFormat: 'j F Y' }} className="w-full px-4 py-3 bg-gray-200 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.preferredDate && <p className="text-red-500 text-sm">{errors.preferredDate}</p>}
            </div>
            {/* Time */}
            <div className="space-y-2">
              <label htmlFor="preferredTime" className="text-lg font-semibold text-white">Time</label>
              <Flatpickr
                id="preferredTime"
                placeholder="Preferred Time"
                value={preferredTime}
                onChange={(time) => setPreferredTime(time)}
                options={{ enableTime: true, noCalendar: true, dateFormat: 'h:i K' }}
                className="w-full px-4 py-3 bg-gray-200 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.preferredTime && <p className="text-red-500 text-sm">{errors.preferredTime}</p>}
            </div>
            {/* Submit Button */}
            <button type="submit" className="w-full bg-green-500 text-black text-lg font-semibold py-3 rounded-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              Schedule Call
            </button>
            {/* Submission Error */}
            {errors.submit && <p className="text-red-500 text-sm mt-2">{errors.submit}</p>}
          </form>
        </div>
      </div>
      <SuccessModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <style>
        {`
          .iti {
            width: 100% !important;
          }
          .error-message {
            color: red;
            font-size: 0.875rem; /* Tailwind class for text-sm */
          }
          .success-message {
            color: green;
            font-size: 1rem;
            margin-bottom: 1rem;
          }
        `}
      </style>
    </div>
  );
};

export default Book;
