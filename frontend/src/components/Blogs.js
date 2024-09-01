import {useEffect, useState} from 'react';
import Wallimg from '../assets/images/Blogs/img2.png'
import Sidecards from './Blogs/sidecards';
import axios from 'axios';
import CardsBottom from './Blogs/cardsBottom';

function Blogs() {

  const [data, setData] = useState([]);
  const [front, setFront] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3000/api/blogs')
    .then(response => {
      // setData(response.data[0].Heading);
      setData(response.data);
      setFront(response.data[0]);
    })
    .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  const handleCardClick = (item) => {
    setFront(item);
  };

    return (
      <>
          <div className='m-4 md:px-12 gap-20'>
      <h1 className='flex justify-center m-4 font-semibold text-5xl leading-[72px] finwise-blue'>Blogs</h1>
      <h2 className='flex sm:justify-start justify-center text-2xl font-bold my-8 finwise-blue'>Top Stories</h2>
        <div>
            <div className={`flex md:flex-row flex-col ${data.length > 1 ? 'justify-between' : 'justify-center'}`}>
            <div className='mainCard md:w-4/6 bg-slate-100 rounded-xl'>
              <div className="rounded-t-xl flex justify-center flex-wrap md:max-h-96  overflow-hidden border border-[#262626]">
                <img className='flex' src={Wallimg} alt="" />
              </div>
              <div className='content p-4'>
              <div className="flex flex-col justify-start gap-4">
              {data.length > 0 ? (
                <>
                  <h3 className="text-3xl font-bold text-[#1A1A1A]">{front.Heading}</h3>
                  <div className={`blogPara ${isOpen ? 'h-auto' : 'h-14 overflow-hidden'}`}>
                  <p className={`transition-all duration-300 ease-in-out text-lg font-semibold ${!isOpen ? '' : "hidden"}`}>{front.Content.slice(0, 400)} ...</p>
                  <p className={`transition-all duration-300 ease-in-out text-lg font-semibold ${!isOpen ? "hidden" : ''}`}>{front.Content}</p>
                  </div>
                </>
              ) : (
                <p>No data available</p>
              )}
              </div>
              <div className="footer flex justify-between my-4">
                <h1 className='font-bold my-auto'>Date-Here</h1>
                <button onClick={handleIsOpen} className='font-bold hover:bg-[#3CB371] hover:text-white rounded-[10px] border border-[#223876] py-3 px-6'>{isOpen ? "Show Less" : "Full Story"}</button>
               </div> 
               </div> 
            </div>
            {data.length > 1 ? 
              <div className={`sideCard md:flex flex-col md:w-1/6 hidden`}>
            <Sidecards sidedata={data.slice(0, 3)} onToggle={handleCardClick}/> 
            </div>
            : ''}
            </div>
        </div>
        <CardsBottom onToggle={handleCardClick}/>
        </div>
        </>
    )
}

export default Blogs;