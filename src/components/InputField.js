/* eslint-disable no-useless-constructor */
import React from "react";
import '../styles/InputField.css'
import Input from "./Input";

export default function InputField({fields, show, onChange, onSubmit}){
    function handleSubmit(e){
        e.preventDefault();
        onSubmit();
    }
    return (<form className={show} onSubmit={handleSubmit}>
        {
            fields.map((f, i)=>{
                return <Input key={i} type={f.type} name={f.name} value={f.value} onChange={onChange}/>
            })
        }
        <button className="outBtn"></button>
    </form>);
}
