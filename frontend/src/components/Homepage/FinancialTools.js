import React from 'react';
import fire from '../Homepage/Tools/fire.png'

const ToolCard = ({ title, description, imageSrc }) => (
  <div className="flex overflow-hidden flex-col flex-1 shrink pt-10 pr-4 pb-4 pl-10 bg-green-500 rounded-xl border border-solid basis-[25px] border-neutral-800 min-h-[913px] min-w-[240px] max-md:pl-5 max-md:max-w-full">
    <div className="flex flex-col w-full max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <h3 className="text-2xl font-semibold text-white max-md:max-w-full">{title}</h3>
        <p className="mt-1.5 text-lg font-medium leading-7 text-blue-900 max-md:max-w-full">{description}</p>
      </div>
    </div>
    <img loading="lazy" src={imageSrc} alt={title} className="object-contain mt-8 max-w-full rounded-xl aspect-[0.62] w-[457px]" />
  </div>
);

const FinancialTools = () => {
  const tools = [
    {
      title: "F.I.R.E Tool",
      description: "Calculate your Financial Independence Retire Early (F.I.R.E) Number.",
      imageSrc: require('../Homepage/Tools/fire.png')
    },
    {
      title: "Goal SIP Tool",
      description: "Plan and implement your financial goals with our Goal SIP tool",
      imageSrc: require('../Homepage/Tools/goal_sip.png') 
    },
    {
      title: "More Financial Tools",
      description: "Use over 10+ calculators and tools that help you with every financial decision.",
      imageSrc: require('../Homepage/Tools/calc_tools.png')
    }
  ];
  

  return (
    <section className="flex flex-col self-center mt-32 w-full max-w-[1596px] max-md:mt-10 max-md:max-w-full p-32">
      <div className="flex gap-10 items-end w-full max-md:max-w-full">
        <div className="flex flex-col min-w-[240px] w-[1173px]">
          <h2 className="text-5xl font-semibold text-blue-900 max-md:max-w-full max-md:text-4xl">
            10+ Financial Planning Tools
          </h2>
          <p className="mt-3.5 text-lg font-medium text-neutral-400 max-md:max-w-full">
            Tailor your journey to financial freedom with our exclusive financial planning tools.
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-20 w-full h-auto max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-8 items-start w-full max-md:max-w-full">
          {tools.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))}
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </section>
    
  );
};

export default FinancialTools;