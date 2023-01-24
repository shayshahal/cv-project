import React, {Component} from "react";
import InputField from "./InputField";
import uniqid from 'uniqid';
import '../styles/Section.css'
class Section extends Component{
    constructor(props){
        super(props);
        this.state = {
            fields: this.props.fields,
            editing: ''
        }
        this.toggleInputField = this.toggleInputField.bind(this);
        this.changeValues = this.changeValues.bind(this)
    }
    toggleInputField(str){
        
        this.setState({editing: str})
    }
    changeValues(name, value){
        this.setState({fields: this.state.fields.map(f=> {
            if(name === f.name)
                return Object.assign(f, {value: [value]})
            return f;
        })})
    }
    render(){
        return (<div className={this.props.title + ' section'}>
            <h1>{this.props.title}</h1>
            {this.state.fields.map((f)=>{
                return (<div key={uniqid()} className={f.name}>
                    {f.name}: {f.value}
                </div>)
            })}
            <InputField show={this.state.editing} onChange={this.changeValues} fields={this.state.fields} onSubmit={this.toggleInputField}/>
            <button onClick={()=>{this.toggleInputField('editing')}}>Edit</button>
        </div>);
    }
}

export default Section;