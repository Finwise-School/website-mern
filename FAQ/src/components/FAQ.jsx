import React from 'react'
import Accordion from './Accordion'

const FAQ = () => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      <Accordion title="Question1" answer="Answer1"/>
      <Accordion title="Question2" answer="Answer2"/>
      <Accordion title="Question3" answer="Answer3"/>
    </div>
  )
}

export default FAQ