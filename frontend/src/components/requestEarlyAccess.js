import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import arrow icons
import startImg from "../assets/images/book/start.png";
import nameImg from "../assets/images/book/name.png";
import emailImg from "../assets/images/book/email.png";
import phoneImg from "../assets/images/book/phone.png";
import readyImg from "../assets/images/book/phone.png"; // New image for the ready-to-join page
import successImg from "../assets/images/book/success.png";
import bgImg from "../assets/images/book/bg_cover.png";
import 'react-phone-number-input/style.css'; // Import react-phone-number-input CSS
import PhoneInput from 'react-phone-number-input';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast CSS
import { Tooltip } from 'react-tooltip';

const EarlyAccessForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const nextStep = async () => {
    if (step === 2) {
      // Validate name
      if (!formData.name.trim()) {
        toast.error('Name is required');
        return;
      }
    }
    if (step === 3) {
      // Validate email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email)) {
        toast.error('Invalid email address');
        return;
      }
    }
    if (step === 4) {
      // Validate phone number
      if (!formData.phone) {
        toast.error('Phone number is required');
        return;
      }
    }
    if (step === 5) {
      // Submit form data to the backend
      try {
        const response = await fetch('http://localhost:5001/api/request-early-access', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setStep(6); // Show success message
        } else {
          toast.error('Failed to submit form');
        }
      } catch (error) {
        console.error('Error:', error);
        toast.error('An error occurred');
      }
      return;
    }
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div
      className="bg-gray-100 flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div
        className="max-w-lg w-full bg-white rounded-lg shadow-lg overflow-hidden p-8 relative"
        style={{ width: '500px', height: '520px' }} // Set fixed width and height
      >
        {/* Progress Bar */}
        {step > 1 && step < 6 && (
          <div id="progressContainer" className="w-full bg-gray-200 rounded-full mb-6">
            <div
              id="progressBar"
              className="progress-bar h-1 bg-blue-600 transition-all duration-300"
              style={{ width: `${(step - 1) * 25}%` }}
            />
          </div>
        )}

        {/* Step Components */}
        {step === 1 && (
          <div className="text-center">
            <img src={startImg} alt="Get Started" className="w-full h-64 object-cover mb-6" />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Get Early Access</h1>
            <p className="finwise-blue mb-6">
              Join our exclusive program and be the first to experience the future of finance.
            </p>
            <button
              onClick={nextStep}
              className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Get Started
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="text-center">
            <img src={nameImg} alt="Enter Name" className="w-full h-64 object-cover mb-6" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What's your name?</h2>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 mb-4"
              data-tip="Name is required"
              data-for="nameTooltip"
            />
            <Tooltip id="nameTooltip" place="top" type="error" effect="solid" />
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="flex items-center text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors duration-300"
              >
                <FaArrowLeft className="mr-2" /> Prev
              </button>
              <button
                onClick={nextStep}
                className="flex items-center bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Next <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="text-center">
            <img src={emailImg} alt="Enter Email" className="w-full h-64 object-cover mb-6" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What's your email?</h2>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 mb-4"
              data-tip="Invalid email address"
              data-for="emailTooltip"
            />
            <Tooltip id="emailTooltip" place="top" type="error" effect="solid" />
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="flex items-center text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors duration-300"
              >
                <FaArrowLeft className="mr-2" /> Prev
              </button>
              <button
                onClick={nextStep}
                className="flex items-center bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Next <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="text-center">
            <img src={phoneImg} alt="Enter Phone" className="w-full h-64 object-cover mb-6" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What's your phone number?</h2>
            <PhoneInput
              defaultCountry="US"
              value={formData.phone}
              onChange={(value) => setFormData({ ...formData, phone: value })}
              placeholder="Enter your phone number"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 mb-4"
              data-tip="Phone number is required"
              data-for="phoneTooltip"
            />
            <Tooltip id="phoneTooltip" place="top" type="error" effect="solid" />
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="flex items-center text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors duration-300"
              >
                <FaArrowLeft className="mr-2" /> Prev
              </button>
              <button
                onClick={nextStep}
                className="flex items-center bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Next <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="text-center">
            <img src={readyImg} alt="Ready to Join" className="w-full h-64 object-cover mb-6" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to join?</h2>
            <p className="finwise-blue mb-6">
              Click below to submit your information and join our early access program.
            </p>
            <button
              onClick={nextStep}
              className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Submit
            </button>
          </div>
        )}

        {step === 6 && (
          <div className="text-center">
            <img src={successImg} alt="Success" className="w-full h-64 object-cover mb-6" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Success!</h2>
            <p className="finwise-blue mb-6">
              Your information has been submitted successfully. We’ll be in touch soon!
            </p>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default EarlyAccessForm;
