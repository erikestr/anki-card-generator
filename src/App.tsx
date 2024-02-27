import { useState } from 'react'
import './App.css'

import SimpleCard from './components/molecules/simple/simple'
import EsTextView from './components/atoms/es-textview/es-textview'
import BackTemplate from './util/template-generator/simple-template-back'
import FrontTemplate from './util/template-generator/simple-template-front'
import { Editor } from '@monaco-editor/react'
import EsCodeEditor from './components/atoms/es-code-editor/es-code-editor'

function App() {
  const [question, setQuestion] = useState('Question #1')
  const [answer, setAnswer] = useState('Answer #1')
  const [description, setDescription] = useState('Description #1')
  const [isCopiedAnswer, setIsCopiedAnswer] = useState(false)
  const [generatedQuestion, setGeneratedQuestion] = useState('')
  const [isCopiedQuestion, setIsCopiedQuestion] = useState(false)
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

  const handleOnCopyQquestion = (event: any) => {
    setIsCopiedQuestion(true)

    setTimeout(() => {
      setIsCopiedQuestion(false)
    }, 2000);
  }

  const handleOnCopyAnswer = (event: any) => {
    setIsCopiedAnswer(true)

    setTimeout(() => {
      setIsCopiedAnswer(false)
    }, 2000);
  }

  return (
    <>
      <div className='w-80'>
        <SimpleCard
          question={question}
          setOnQuestion={handleTitle}
          answer={answer}
          setOnAnswer={handleAnswer}
          description={description}
          setOnDescription={handleDescription}
          disabled={false}
          setOnClick={handleGenerate} />

        {generatedQuestion &&
          (<EsTextView
            code={generatedQuestion}
            onCopy={handleOnCopyQquestion}
            copied={isCopiedQuestion} />)
        }

        {generatedAnswer &&
          (<EsTextView
            code={generatedAnswer}
            onCopy={handleOnCopyAnswer}
            copied={isCopiedAnswer} />)
        }

        <EsCodeEditor />
      </div>
    </>
  )
}

export default App
