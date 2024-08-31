import { useEffect, useState, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';
import Wallimg from '../../assets/images/Blogs/img2.png';
import Buttonnext from "../../assets/images/Blogs/Buttonnext.png";
import Buttonprev from "../../assets/images/Blogs/Buttonprev.png";

const CardsBottom = ({ onToggle }) => {

  const [data, setData] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    axios.get('http://localhost:2142/api')
    .then(response => {
      // setData(response.data[0].Heading);
      setData(response.data);
      console.log("Hello");
    })
    .catch(error => console.error('Error fetching data:', error));
  }, []);

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    partialVisibilityGutter: 40 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30 
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30 
  }
};
return (
  <>
<Carousel ref={carouselRef} partialVisible={true} responsive={responsive}>
{data.map((item, index) => {
        return (
          <div key={item._id || index} className='cursor-pointer m-4  bg-slate-100 rounded-xl' onClick={() => onToggle(item)}>
            <div className="rounded-t flex justify-center flex-wrap overflow-hidden">
              <img src={Wallimg} alt="" />
            </div>
            <div className="content py-2">
              <div className="flex flex-col justify-start">
                <h3 className="text-sm font-bold">{item.Heading.slice(0, 35)}</h3>
                <h6 className="text-sm">Date</h6>
              </div>
            </div>
          </div>
        );
      })}
</Carousel>
      <div className='msFooter flex flex-row justify-center items-center my-3'>
                <button className='custom-arrow custom-arrow-prev' onClick={() => carouselRef.current && carouselRef.current.previous()}>
              <img className='m-1' src={Buttonprev} alt='' />
                </button>
                <button className='custom-arrow custom-arrow-next' onClick={() => carouselRef.current && carouselRef.current.next()}>
              <img className='m-1' src={Buttonnext} alt='' />
                </button>
            </div>
<hr className='border-t-1 border-black my-4 md:my-28' />
</>
  )
}

export default CardsBottom