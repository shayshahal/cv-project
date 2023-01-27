import React, { Component} from "react";
import Section from "./Section";
import '../styles/Personal.css'
class Personal extends Component{
    render(){
        return (<Section ind={-1} class='Personal' fields={[
                {name: 'Full Name', type: 'text', value: 'Full Name'},
                {name: 'Age', type: 'number', value:''},
                {name: 'Email',type: 'email', value: ''},
                {name: 'Phone',type: 'tel', value: ''},
                {name: 'Address',type: 'text', value: ''},
                {name: 'About Me',type: 'text', value: ''},
            ]
        }/>
);
    }
}

export default Personal;