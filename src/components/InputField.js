/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
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
                this.props.fields.map((f, i)=>{
                    return (<label key={i} htmlFor={f.name}>
                        {f.name + ' '}
                        <input id={f.name} type={f.type} value={f.value} onChange={this.handleChange}/>
                    </label>);
                })
            }
            <button>Submit</button>
        </form>);
    };
}

export default InputField;