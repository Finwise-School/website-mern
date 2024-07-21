import React from 'react';
import Slider from "react-slick";

export default function carouselCards() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              autoplay: true,
              speed: 2000,
              autoplaySpeed: 2000,
              cssEase: "linear",
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              speed: 2000,
              autoplaySpeed: 2000,
              cssEase: "linear",
            }
          },
        ]
      };
    return (
        <div className="w-4/4 m-auto">
        <div className="mt-20">
        <h3 className="text-xl p-[0.2rem] font-bold text-center">Our Supporters</h3>
        <Slider {...settings}>
          {data.map((d) => (
            <div className="bg-white h-[30rem] w-auto text-black rounded-xl border-4 border-solid">
              <div className="rounded-t- flex justify-center items-center">
                <img src={d.img} alt="" className="h-44 w-55"/>
              </div>
  
              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <h3 className="text-xl p-[1rem] font-bold">{d.compName}</h3>
                <p>{d.compDesc}</p>
                <a href={d.compLink} className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">More</a>
              </div>
            </div>
          ))}
        </Slider>
        </div>
  
      </div>
    )
  }

const data = [
    {
      compName: `Barclays | Eagle Labs`,
      img: `/images/Barclays.jpg`,
      compDesc: `We facilitate connections and provide essential tools
                 through our national incubator network and online platforms, empowering
                 entrepreneurs and founders to innovate and grow effectively.`,
      compLink: `https://labs.uk.barclays/`           
    },
    {
      compName: `University of Strathclyde`,
      img: `/images/Strathclvde.jpg`,
      compDesc: `Founded in 1796, "The Place of Useful Learning" is a
                 leading higher education institution offering a broad spectrum of disciplines,
                 from Law and Engineering to Business and Health.`,
      compLink: `https://www.strath.ac.uk/`           
    },
    {
      compName: `University of STRATHCLYDE INSPIRE`,
      img: `/images/StrathclvdeInspire.jpg`,
      compDesc: `Strathclyde Inspire empowers its students, staff, and
                 alumni to explore, create, and commercialize business ideas and research,
                 offering ongoing support and community engagement opportunities.`,
      compLink: `https://www.strath.ac.uk/workwithus/strathclydeinspire/`
    }
  ]