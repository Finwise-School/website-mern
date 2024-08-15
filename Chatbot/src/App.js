import React from "react";
import ChatBot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';

function App() {

  const steps = [
    {
      id: 'Great',
      message: 'Question1',
      trigger: 'Ask Name'
    },
    {
      id: 'Ask Name',
      message: 'Question2',
      trigger: 'Waiting1'
    },
    {
      id: 'Waiting1',
      user: true,
    }
  ]

  return (
    <div>
    <Segment>
      <ChatBot steps={steps} />
    </Segment>
    </div>
  );
}

export default App;
