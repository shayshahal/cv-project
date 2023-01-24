import React, { Component } from "react";

class Input extends Component{
    constructor(props){
        super();
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.props.onChange(e.target.name, e.target.value)
    }
    render(){
        const {name, type, value} = this.props;
        return (<label htmlFor={name}>{name + ' '}<input type={type} name={name} value={value} onChange={this.handleChange}/></label>);
    };
}

export default Input;