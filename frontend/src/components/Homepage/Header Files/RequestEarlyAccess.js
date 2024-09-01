import React from 'react';
import { useNavigate } from 'react-router-dom';

function RequestAccessButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/early-access');
  };

  return (
    <button 
      onClick={handleClick}
      className="gap-2 self-stretch pt-4 pb-5 pl-5 my-auto font-extrabold text-blue-900 bg-white rounded-xl max-md:px-5"
    >
      Request Early Access
    </button>
  );
}

export default RequestAccessButton;
