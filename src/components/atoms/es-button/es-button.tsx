const EsButton = ({ label, type, disabled, onClick, ...props }: any) => {
    return (
        <div className="es-input-atom">
            <button
                className='es-button'
                type={type}
                disabled={disabled}
                onClick={onClick}
                {...props}>
                {label}
            </button>
        </div>
    );
};

export default EsButton;