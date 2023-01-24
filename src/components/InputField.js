/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import uniqid from 'uniqid';
import '../styles/InputField.css'

const Input = ({id, type, value, onChange}) => 
    {
        return (<label htmlFor={id} key={uniqid()}>
            {id + ' '}
            <input id={id} type={type} value={value}  onChange={onChange}/>
        </label>)
    }
class InputField extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.onSubmit();
    }
    handleChange(e){
        this.props.onChange(e.target.id, e.target.value)
    }
    render(){
        return (<form onSubmit={this.handleSubmit}>
            {
                this.props.fields.map((f)=>{
                    return (
                        <Input key={uniqid()} id={f.name} type={f.type} value={f.value} onChange={this.handleChange}/>
                    );
                })
            }
            <button>Submit</button>
        </form>);
    };
}

export default InputField;