import EsButton from '../../atoms/es-button/es-button';
import EsInputText from '../../atoms/es-input/es-input';
import EsTextarea from '../../atoms/es-textarea/es-textarea';

const SimpleCard = ({ title, answer, setOnTitle, setOnAnswer, disabled, setOnClick }: any) => {
    return (
        <>
            <div>
                <EsInputText
                    label="Title"
                    value={title}
                    onChange={setOnTitle}
                    placeholder="Enter a subject..."
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