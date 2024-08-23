import React from 'react'
import Accordion from './FAQ/Accordion'
import qaArr from './FAQ/QA';

const FAQ = () => {

  return (
    <div className='my-20 flex justify-center text-center flex-col'>
      <h1 className='text-3xl font-bold m-8'>FAQ</h1>
      <div className="p-4 bg-gray-200 rounded-lg mx-8">
        {qaArr.map((item, index) => (
          <Accordion key={index} title={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  )
}

export default FAQ
