import React from 'react';

const EarlyAccessTemplate = () => {
  return (
    <div className="bg-white w-full h-screen flex flex-col lg:flex-row items-center px-6 lg:px-20 py-12 lg:py-16">
      {/* Text Section */}
      <div className="flex-grow lg:w-1/2 mb-6 lg:mb-0 lg:mr-16">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#263871] mb-4 lg:mb-6">
          Start Your Financial Journey Today
        </h1>
        <p className="text-base lg:text-lg text-[#A8A8A8] leading-relaxed">
          Your path to financial freedom is just a click away. Whether you’re aiming to optimize your investments,
          create a solid savings plan, or receive expert financial advice, FinWise is here to guide you every step
          of the way. Take the first step towards achieving your financial goals—explore our innovative planning
          tools or connect with our team for personalized support tailored to your needs.
        </p>
      </div>

      {/* Button Section */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end lg:mt-0 mt-6">
        <a
          href="#"
          className="inline-block border-2 border-[#263871] text-[#263871] hover:border-green-500 hover:text-green-500 rounded-lg py-3 px-6 lg:px-8 text-base lg:text-lg min-w-[250px] text-center transition-all duration-300"
        >
          Request Early Access
        </a>
      </div>
    </div>
  );
};

export default EarlyAccessTemplate;
