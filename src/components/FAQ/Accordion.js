import React, { useState } from 'react';

const Accordian = ({title, answer}) => {
    const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className="py-2">
      <button  onClick={() => setAccordionOpen(!accordionOpen)} className="flex justify-between w-full focus:shadow-none">
        <span className='font-bold text-lg text-left'>{title}</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        <svg
         className='fill-indigo-500 shrink-0 ml-8'
         width="16"
         height="16"
         xmlns="http://www.w3.org/2000/svg"
        >
          <rect
           y="7"
           width="16"
           height="2"
           rx="1"
           className={`transform origin-center transition duration-200 ease-out ${accordionOpen && "!rotate-180"}`}
          />
          <rect
           y="7"
           width="16"
           height="2"
           rx="1"
           className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && "!rotate-180"}`}
          />
          </svg>
      </button>
      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
        accordionOpen
         ? 'grid-rows-[1fr] opacity-100'
         : 'grid-rows-[0fr] opacity-0'
      }`}>
        <div className={`overflow-hidden text-left transition-all duration-300 ease-in-out text-base ${
            accordionOpen
            ? 'my-4'
            : ''
        }`}>
          {Array.isArray(answer) ? (
            answer.map((item, index) => (
              <div key={index} className='pb-4'>
                <h3 className='font-semibold'>{item.heading}</h3>
                <p>{item.subAnswer}</p>
              </div>
            ))
          ) : (
            <p>{answer}</p>
          )}</div>
      </div>
    </div>
  )
}

export default Accordian