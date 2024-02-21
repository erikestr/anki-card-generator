import { useState } from 'react'
import './App.css'

import SimpleCard from './components/molecules/simple/simple'
import EsTextView from './components/atoms/es-textview/es-textview'
import BackTemplate from './util/template-generator/simple-template-back'
import FrontTemplate from './util/template-generator/simple-template-front'

function App() {
  const [question, setQuestion] = useState('Question #1')
  const [answer, setAnswer] = useState('Answer #1')
  const [description, setDescription] = useState('Description #1')
  const [isGenerated, setIsGenerated] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const [generatedQuestion, setGeneratedQuestion] = useState('')
  const [generatedAnswer, setGeneratedAnswer] = useState('')

  const handleTitle = (event: any) => {
    setQuestion(event.target.value);
  }

  const handleAnswer = (event: any) => {
    setAnswer(event.target.value);
  }

  const handleDescription = (event: any) => {
    setDescription(event.target.value);
  }

  const handleGenerate = (event: any) => {
    if (question && answer) {
      const templateFrontCard = new FrontTemplate();
      const templateBackCard = new BackTemplate();

      const generatedQuestionText = templateFrontCard.generate(question);
      const generatedAnswerText = templateBackCard.generate(answer, description);
      
      setGeneratedQuestion(generatedQuestionText);
      setGeneratedAnswer(generatedAnswerText);
    }
  }

  const handleOnCopy = (event: any) => {
    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 2000);
  }

  return (
    <>
      <div>
        <SimpleCard
          question={question}
          setOnQuestion={handleTitle}
          answer={answer}
          setOnAnswer={handleAnswer}
          description={description}
          setOnDescription={handleDescription}
          disabled={false}
          setOnClick={handleGenerate} />
      </div>
      

      {generatedQuestion &&
        (<EsTextView
          code={generatedQuestion}
          onCopy={handleOnCopy}
          copied={isCopied} />)
      }

      {generatedAnswer &&
        (<EsTextView
          code={generatedAnswer}
          onCopy={handleOnCopy}
          copied={isCopied} />)
      }
    </>
  )
}

export default App
