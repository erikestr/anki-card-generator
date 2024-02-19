import { useState } from 'react'
import './App.css'

import EsInputText from './components/atoms/es-input/es-input'
import EsTextarea from './components/atoms/es-textarea/es-textarea'

function App() {
  const [title, setTitle] = useState('')

  const handleTitle = (event: any) => {
    setTitle(event.target.value);
  }

  const [answer, setAnswer] = useState('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores aperiam, quidem corporis explicabo atque ipsum quis praesentium sapiente nisi magnam recusandae! Quia temporibus debitis rerum odio quae dolorum iste veniam.')

  const handleAnswer = (event: any) => {
    setAnswer(event.target.value);
  }

  return (
    <>
      <div>
        <EsInputText
          label="Title"
          value={title}
          onChange={handleTitle}
          placeholder="Enter a subject..."
        />
      </div>

      <div>
        <EsTextarea
          label="Answer"
          value={answer}
          onChange={handleAnswer}
          placeholder="Enter answer..."
        />
      </div>
    </>
  )
}

export default App
