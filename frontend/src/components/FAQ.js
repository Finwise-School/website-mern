import React, { useState, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import Faqcard from './FAQ/Faqcard';
import qaArr from './FAQ/QA';
import FAQcarouselcard from './FAQ/Faqcarouselcard';
import Slider from "react-slick";
import Buttonnext from "../assets/images/clients/Buttonnext.png";
import Buttonprev from "../assets/images/clients/Buttonprev.png";

const FAQ = () => {
  // State to keep track of which card is expanded
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [mainExpand, setMainExpand] = useState(false);
  const isLarge = useMediaQuery({ minWidth: 1024 });
  const isMedium = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isSmall = useMediaQuery({ maxWidth: 767 });

  // Handler to toggle the expansion state of a specific card
  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const sliderRef = useRef(null); // Create a ref to control the slider

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 200,
    cssEase: "linear",
    responsive: [
    ]
  };

  return (
    <>
    <div className='mainFaqContainer flex flex-col mt-32 md:my-32 md:m-32 m-[14px]'>
      <div className='faqHeader flex flex-row md:justify-between md:items-start justify-center items-center'>
        <div>
          <h1 className='font-semibold text-[28px] leading-10 md:text-5xl md:leading-[72px] finwise-blue'>
            Frequently Asked Questions
          </h1>
          <p className='font-medium text-sm md:text-lg leading-7 finwise-para'>
            Find answers to common questions about Finwise School,
          </p>
        </div>
        <button className='py-[18px] px-6 finwise-green-bg border border-[#223876] rounded-lg h-16 md:inline-block hidden'  onClick={() => {setMainExpand(!mainExpand)}}>
          <p className='font-medium text-lg leading-7 m-auto text-white'>
            {mainExpand ? "Show Less" : "View All FAQ’s"}</p>
        </button>
      </div>
      <div className='faqContent flex justify-center items-center flex-col mt-14'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-y-14 md:gap-x-6'>
                {isLarge || isMedium ? (mainExpand ? qaArr : qaArr.slice(0, 3)).map((item, index) => (
                  <Faqcard
                    key={index}
                    title={item.question}
                    answer={item.answer}
                    isExpanded={expandedIndex === index}
                    onToggle={() => handleToggle(index)}
                    isArray={item.isArray}
                  />
                )) : 
                  <>
                  <Slider ref={sliderRef} {...settings}>
                    {qaArr.map((item, index) => (
                      item.isArray ? (null) :
                      (<FAQcarouselcard 
                        key={index}
                        title={item.question}
                        answer={item.answer}
                        isExpanded={expandedIndex === index}
                        onToggle={() => handleToggle(index)}
                      />)
                    ))}
                  </Slider>
                  </> }
              </div>
      </div>
      <hr className='border-t-1 border-black my-4 md:my-28' />
      <div className='msFooter flex flex-row justify-center items-center md:hidden my-3'>
                <button className='custom-arrow custom-arrow-prev' onClick={() => sliderRef.current.slickPrev()}>
              <img className='m-1' src={Buttonprev} alt='' />
                </button>
                <button className='custom-arrow custom-arrow-next' onClick={() => sliderRef.current.slickNext()}>
              <img className='m-1' src={Buttonnext} alt='' />
                </button>
            </div>
    </div>
    </>
  );
};

export default FAQ;
