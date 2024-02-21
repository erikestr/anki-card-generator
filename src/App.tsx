import { useState } from 'react'
import './App.css'

import EsInputText from './components/atoms/es-input/es-input'
import EsTextarea from './components/atoms/es-textarea/es-textarea'
import SimpleCard from './components/molecules/simple/simple'

function App() {
  const [title, setTitle] = useState('')

  const handleTitle = (event: any) => {
    setTitle(event.target.value);
  }

  const [answer, setAnswer] = useState('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores aperiam, quidem corporis explicabo atque ipsum quis praesentium sapiente nisi magnam recusandae! Quia temporibus debitis rerum odio quae dolorum iste veniam.')

  const handleAnswer = (event: any) => {
    setAnswer(event.target.value);
  }

  const handleGenerate = (event: any) => {
    console.log('title', title);
    console.log('title', title);
    console.log('answer', answer);

  }

  return (
    <>
      <div>
        <SimpleCard
          title={title}
          setOnTitle={handleTitle}
          answer={answer}
          setOnAnswer={handleAnswer}
          disabled={false}
          setOnClick={handleGenerate} />
      </div>
    </>
  )
}

export default App
