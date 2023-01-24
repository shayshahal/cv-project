/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import uniqid from 'uniqid';
import '../styles/InputField.css'


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
        return (<form className={this.props.show} onSubmit={this.handleSubmit}>
            {
                this.props.fields.map((f)=>{
                    return (<label key={uniqid()} htmlFor={f.name}>
                        {f.name + ' '}
                        <input key={uniqid()} id={f.name} type={f.type} value={f.value} onChange={this.handleChange}/>
                    </label>);
                })
            }
            <button>Submit</button>
        </form>);
    };
}

export default InputField;