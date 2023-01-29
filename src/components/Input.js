import React from "react";
import '../styles/Input.css'

export default function Input({name, type, value, onChange}){
    function handleChange(e){
        onChange(e.target.name, e.target.value)
    }
    return (<label htmlFor={name}>{name + ': '}<input type={type} name={name} value={value} onChange={handleChange}/></label>);
}
