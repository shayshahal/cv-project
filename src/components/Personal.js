import React, { Component} from "react";
import Section from "./Section";

class Personal extends Component{
    render(){
        return (<Section title='Personal' fields={[
                {name: 'Name', type: 'text', value: 'Shay'},
                {name: 'Email',type: 'email', value: 'shay840@gmail.com'},
                {name: 'Phone',type: 'tel', value: '054-1234567'}
            ]
        }/>
);
    }
}

export default Personal;