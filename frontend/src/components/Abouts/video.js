import React from 'react'
import vid from '../../assets/video/aboutUS.mp4'
const Video = () => {
  return (
    <div className='relative w-full h-full'>
      <video
        src={vid}
        autoPlay
        loop
        muted
        className='w-full h-full object-cover'
        type="video/mp4"
      />
    </div>)
};

export default Video