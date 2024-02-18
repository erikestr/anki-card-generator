import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState('')

  const handleTitle = (event: any) => {
    setTitle(event.target.value);
  }

  return (
    <>
      <div>
        <h1 className='es-text'>Title</h1>
        <span className='es-input-container'>
          <input className='es-input' type="text" onChange={handleTitle}/>
        </span>
      </div>
      
      <div>
        <h1 className='es-text'>Answer</h1>
        <span className='es-input-container'>
          <textarea className='es-text-area' rows={10} spellCheck='false'></textarea>
        </span>
      </div>
    </>
  )
}

export default App
