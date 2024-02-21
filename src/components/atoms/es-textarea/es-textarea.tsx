const EsTextarea = ({ label, value, onChange, placeholder, spellCheck, ...props }: any) => {
    return (
        <div className="es-input-atom">
            {label &&
                <label className="es-label" htmlFor={props.id}>{label}</label>
            }
            <div className='es-input-container'>
                <div className="es-text-area-container">
                    <textarea
                        className='es-text-area'
                        spellCheck={spellCheck}
                        value={value}
                        onChange={onChange} />
                </div>
            </div>
        </div>
    );
};

export default EsTextarea;