import { useState } from 'react'
import FAQ from './components/FAQ'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-4'>
    <FAQ />
    </div>
  )
}

export default App
