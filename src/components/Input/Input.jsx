function Input({onKeyUp, estado, cambiarEstado, label, type}) {

    const onChange = (e)=>{
        cambiarEstado(e.target.value);
    }

    return (
        <div>
            <label>{label}</label>
            <br/>
            <input type={type} onChange={onChange} onKeyUp={onKeyUp} value={estado} />
        </div>
    )
};

export default Input;