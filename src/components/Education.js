import React, { Component } from "react";
import Section from "./Section";
import '../styles/Education.css'
class Education extends Component{
    constructor(props){
        super(props);
        this.onDelete = this.onDelete.bind(this);
    }
    onDelete(){
        this.props.onDelete(this.props.ind, Education)
    }
    render(){
        return (<Section onDelete={this.onDelete} ind={this.props.ind} class='Education' fields={[
            {name: 'School/University name', type: 'text', value: 'School/University name'},
            {name: 'Start',type: 'date', value: ''},
            {name: 'Finish',type: 'date', value: ''},
            {name: 'Degree',type: 'text', value: ''},
            {name: 'Subject',type: 'text', value: ''},
        ]}/>);
    };
}

export default Education