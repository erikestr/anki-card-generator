const EsInputText = ({ label, value, onChange, placeholder, ...props }: any) => {
  return (
    <div className="es-input-atom">
      {label &&
        <label className="es-label" htmlFor={props.id}>{label}</label>
      }
      <div className="es-input-container">
        <input
          className="es-input"
          type="text"
          id={props.id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...props}
        />
      </div>
    </div>
  );
};

export default EsInputText;