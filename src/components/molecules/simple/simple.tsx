import EsButton from '../../atoms/es-button/es-button';
import EsInputText from '../../atoms/es-input/es-input';
import EsTextarea from '../../atoms/es-textarea/es-textarea';

const SimpleCard = ({ question, answer, description, setOnQuestion, setOnAnswer, setOnDescription, disabled, setOnClick }: any) => {
    return (
        <>
            <div>
                <EsInputText
                    label="Title"
                    value={question}
                    onChange={setOnQuestion}
                    placeholder="Enter a question..."
                />
            </div>

            <div>
                <EsTextarea
                    label="Answer"
                    value={answer}
                    onChange={setOnAnswer}
                    placeholder="Enter answer..."
                    spellCheck='false'
                />
            </div>

            <div>
                <EsTextarea
                    label="Description"
                    value={description}
                    onChange={setOnDescription}
                    placeholder="Enter desription..."
                    spellCheck='false'
                />
            </div>

            <div className='m-t-1'>
                <EsButton
                    label='Generar'
                    onClick={setOnClick}
                    type='button'
                    disabled={disabled}
                />
            </div>
        </>
    );
};

export default SimpleCard;