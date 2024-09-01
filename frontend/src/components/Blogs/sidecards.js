import Wallimg from '../../assets/images/Blogs/img2.png';

function Sidecards({ sidedata = [], onToggle }) { // Destructure sidedata from props with default value as empty array
  return (
    <>
      {sidedata.map((item, index) => {
        return (
          <div key={item._id || index} onClick={() => onToggle(item)} className='cursor-pointer mb-4  bg-slate-100 rounded-lg'>
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
    </>
  );
}

export default Sidecards;
