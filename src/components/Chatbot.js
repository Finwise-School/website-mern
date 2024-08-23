import React, { useState } from 'react';
import Chatbotimg from '../assets/images/Chatbot/chatbot.png';
import Closeimg from '../assets/images/Chatbot/close.png';
import responses from './Chatbot/responses';
import subOptions from './Chatbot/subOptions';
import './Chatbot/chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi there! How can I assist you today?", isBot: true }
  ]);
  const [options, setOptions] = useState([
    "I have some General Questions",
    "About Platform Access and Features",
    "What are Learning Experience and Courses",
    "About Rewards and Incentives",
    "Support and Additional Information"
  ]);

  const [currentLevel, setCurrentLevel] = useState('main');
  const [selectedOption, setSelectedOption] = useState(null);
  const [previousSubOptions, setPreviousSubOptions] = useState([]);

  // subOptions and responses are being imported, so no need for these lines
  // eslint-disable-next-line no-unused-expressions
  subOptions;
  // eslint-disable-next-line no-unused-expressions
  responses;

  const handleMajorOptionClick = (option) => {
    setMessages([...messages, { text: option, isBot: false }]);
    setSelectedOption(option);
    setOptions(subOptions[option] || []);
    setCurrentLevel('sub');
    setPreviousSubOptions(subOptions[option] || []);
  };

  const handleSubOptionClick = (subOption) => {
    setMessages([...messages, { text: subOption, isBot: false }]);
    const response = responses[subOption] || "I'm not sure about that.";
    setMessages([...messages, { text: subOption, isBot: false }, { text: response, isBot: true }]);
  };

  const handleClear = () => {
    setMessages([...messages, { text: "Returning to main options...", isBot: true }]);
    setOptions([
      "I have some General Questions",
      "About Platform Access and Features",
      "What are Learning Experience and Courses",
      "About Rewards and Incentives",
      "Support and Additional Information"
    ]);
    setCurrentLevel('main');
    setSelectedOption(null);
  };

  const [isOpen, setIsOpen] = useState(false);

  const openButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`fixed bottom-4 right-4 z-50 border border-gray-300 rounded-lg overflow-hidden bg-gray-100 flex flex-col transition-all duration-500 ease-in-out backdrop-blur ${
          !isOpen ? "w-[90vw] max-w-[350px] h-[60px]" : "w-[90vw] max-w-[400px] h-[80vh]"
      }`}>
        {isOpen ? (
          <>
            <img src={Closeimg} alt="" className=' w-6 h-6 absolute top-2 right-2 cursor-pointer' onClick={openButton} />
            <div className="flex-1 p-3 overflow-y-auto flex flex-col">
              {messages.map((msg, index) => (
                <div key={index} className={`my-2 p-3 rounded-lg max-w-[80%] break-words ${msg.isBot ? 'bg-gray-200 self-start' : 'bg-blue-500 text-white self-end'}`}>
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="p-3 space-y-2">
              {currentLevel === 'main' ? (
                options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleMajorOptionClick(option)}
                    className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm"
                  >
                    {option}
                  </button>
                ))
              ) : (
                <>
                  {options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleSubOptionClick(option)}
                      className="w-full p-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 text-sm"
                    >
                      {option}
                    </button>
                  ))}
                  <button
                    className="w-full p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                    onClick={handleClear}
                  >
                    Go Back to Main Options
                  </button>
                </>
              )}
            </div>
          </>
        ) : (
          <button className='flex flex-row items-center justify-center text-center my-auto' onClick={openButton}>
            <p className='text-sm'>Ask Me!</p>
            <img src={Chatbotimg} alt="" className="w-6 h-6 ml-2" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
