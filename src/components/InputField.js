/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import '../styles/InputField.css'
import Input from "./Input";

class InputField extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.onSubmit();
    }
    render(){
        return (<form className={this.props.show} onSubmit={this.handleSubmit}>
            {
                this.props.fields.map((f, i)=>{
                    return <Input key={i} type={f.type} name={f.name} value={f.value} onChange={this.props.onChange}/>
                })
            }
            <button className="outBtn"></button>
        </form>);
    };
}

export default InputField;