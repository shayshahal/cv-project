import React, { Component } from "react";
import Section from "./Section";
class Practical extends Component{
    render(){
        return (<Section title='Practical Experience' fields={[
            {name: 'Company name', type: 'text', value: 'wahdas'},
            {name: 'Position title',type: 'text', value: 'aaaaa'},
            {name: 'Main tasks',type: 'text', value: 'asdawdada'},
        ]}/>);
    };
}

export default Practical