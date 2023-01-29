import React, {useState} from "react";
import InputField from "./InputField";
import uniqid from 'uniqid';
import '../styles/Section.css'
export default function Section (props){
    const [fields, setFields] = useState(props.fields)
    const [editing, setEditing] = useState('');
    function changeValues(name, value){
        setFields(fields.map(f=> {
            if(name === f.name)
                return Object.assign(f, {value: [value]})
            return f;
        }))
    }
    function deleteSelf(){
        props.onDelete();
    }
        return (<div className={props.sectionClass + ' section'}>
            <h1 className={props.sectionClass+'Title'}>{fields[0].value}</h1>
            <div className='content'>
                {fields.slice(1).map((f)=>{
                    return (<span key={uniqid()} className={f.name}>
                        {f.name}: {f.value}
                    </span>)
                })}
            </div>
            <InputField show={editing} onChange={changeValues} fields={fields} onSubmit={()=>{setEditing('')}}/>
            <button className='editBtn' onClick={()=>{setEditing('editing')}}>✎</button>
            {props.ind !== -1 && <button className='delBtn' onClick={deleteSelf}>✖️</button>}
            
        </div>);
    
}