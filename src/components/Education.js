import React from "react";
import Section from "./Section";
import '../styles/Education.css'
export default function Education({onDelete, ind}){
    function onRemove(){
        onDelete(ind, Education)
    }
    return (<Section onDelete={onRemove} ind={ind} class='Education' fields={[
        {name: 'School/University name', type: 'text', value: 'School/University name'},
        {name: 'Start',type: 'date', value: ''},
        {name: 'Finish',type: 'date', value: ''},
        {name: 'Degree',type: 'text', value: ''},
        {name: 'Subject',type: 'text', value: ''},
    ]}/>);
}
