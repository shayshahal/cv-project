import React, { Component } from "react";
import Section from "./Section";

class Education extends Component{
    render(){
        return (<Section title='Education' fields={[
            {name: 'School name', type: 'text', value: 'Psagot'},
            {name: 'Title of study',type: 'text', value: 'idk'},
            {name: 'Date of study',type: 'date', value: '2000-12-25'}
        ]}/>);
    };
}

export default Education