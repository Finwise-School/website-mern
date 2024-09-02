import React from 'react';
import { Link } from 'react-router-dom'; 

const EarlyAccessTemplate = () => {
  return (
    <div className="bg-white w-full h-3/6 px-6 lg:px-20 py-12 lg:py-16">
      <div className="max-w-screen-lg mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="lg:max-w-3xl">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#263871] mb-4 lg:mb-6">
            Start Your Financial Journey Today
          </h1>
          <p className="text-base lg:text-lg text-[#A8A8A8] leading-relaxed mb-4 lg:mb-0">
            Your path to financial freedom is just a click away. Whether you’re aiming to optimize your investments,
            create a solid savings plan, or receive expert financial advice, FinWise is here to guide you every step
            of the way. Take the first step towards achieving your financial goals—explore our innovative planning
            tools or connect with our team for personalized support tailored to your needs.
          </p>
        </div>

        <div className="mt-6 lg:mt-0 lg:ml-10">
          <a>
          <Link
            to="/early-access" 
            className="inline-block rounded-lg text-[#263871] hover:text-green-500 rounded-lg py-3 px-6 lg:px-8 text-base lg:text-lg min-w-[200px] lg:min-w-[250px] text-center transition-all duration-300"
            style={{
              border: '5px solid',
              borderRadius: '12px',
              borderImage: 'linear-gradient(90deg, #223876 0%, #3CB371 100%) 1',
            }}
          />
            Request Early Access
          </a>.
        </div>
      </div>
    </div>
  );
};

export default EarlyAccessTemplate;
