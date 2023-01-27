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
        this.deleteSelf = this.deleteSelf.bind(this);
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
    deleteSelf(){
        this.props.onDelete();
    }
    render(){
        const {fields, editing} = this.state;
        return (<div className={this.props.class + ' section'}>
            <h1 className={this.props.class+'Title'}>{fields[0].value}</h1>
            <div className='content'>
                {fields.slice(1).map((f)=>{
                    return (<span key={uniqid()} className={f.name}>
                        {f.name}: {f.value}
                    </span>)
                })}
            </div>
            <InputField show={editing} onChange={this.changeValues} fields={fields} onSubmit={this.toggleInputField}/>
            <button className='editBtn' onClick={()=>{this.toggleInputField('editing')}}>✎</button>
            {this.props.ind !== -1 && <button className='delBtn' onClick={this.deleteSelf}>✖️</button>}
            
        </div>);
    }
}

export default Section;