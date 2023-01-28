import React from "react";
import '../styles/Input.css'

const Input = ({name, type, value}) => {
    function handleChange(e){
        this.props.onChange(e.target.name, e.target.value)
    }
    return (<label htmlFor={name}>{name + ': '}<input type={type} name={name} value={value} onChange={handleChange}/></label>);
}

export default Input;