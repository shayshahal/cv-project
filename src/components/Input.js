import React, { Component } from "react";
import '../styles/Input.css'

class Input extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.props.onChange(e.target.name, e.target.value)
    }
    render(){
        const {name, type, value} = this.props;
        return (<label htmlFor={name}>{name + ': '}<input type={type} name={name} value={value} onChange={this.handleChange}/></label>);
    };
}

export default Input;