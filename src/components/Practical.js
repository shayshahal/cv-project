import React from "react";
import Section from "./Section";
import '../styles/Practical.css'
export default function Practical({onDelete, ind}){
    function onRemove(){
        onDelete(ind, Practical)
    }
    return (<Section onDelete={onRemove} ind={ind} class='Practical' fields={[
        {name: 'Company name', type: 'text', value: 'Company name'},
        {name: 'Start',type: 'date', value: ''},
        {name: 'Finish',type: 'date', value: ''},
        {name: 'Position',type: 'text', value: ''},
        {name: 'Description', type: 'text', value:''}
    ]}/>);
}

