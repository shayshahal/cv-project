import React, { Component } from "react";
import Section from "./Section";
import '../styles/Practical.css'
class Practical extends Component{
    constructor(props){
        super(props);
        this.onDelete = this.onDelete.bind(this);
    }
    onDelete(){
        this.props.onDelete(this.props.ind, Practical)
    }
    render(){
        return (<Section onDelete={this.onDelete} ind={this.props.ind} class='Practical' fields={[
            {name: 'Company name', type: 'text', value: 'Company name'},
            {name: 'Start',type: 'date', value: ''},
            {name: 'Finish',type: 'date', value: ''},
            {name: 'Position',type: 'text', value: ''},
            {name: 'Description', type: 'text', value:''}
        ]}/>);
    };
}

export default Practical