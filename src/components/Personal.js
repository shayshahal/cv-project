import React, { Component} from "react";
import InputField from "./InputField";

class Personal extends Component{
    constructor(props){
        super(props);
        this.state = {
            Name: 'Shay',
            Email: 'shay840@gmail.com',
            Phone: '054-2594831',
            editing: ''
        }
        this.toggleInputField = this.toggleInputField.bind(this);
        this.changeValues = this.changeValues.bind(this)
    }
    toggleInputField(str){
        this.setState({editing: str})
    }
    changeValues(name, value){
        this.setState({[name]: value})
    }
    render(){
        const {Name, Email, Phone,} = this.state;
        return (<div>
            <h1 className="Name">Hi, my name is {Name}.</h1>
            <div>
                <span>@ {Email}</span>
                <span>📞 {Phone}</span>
            </div>
            <InputField onChange={this.changeValues} onSubmit={this.toggleInputField} fields={[{
                    name: 'Name', 
                    type: 'text',
                    value: Name
                },{
                    name: 'Email',
                    type: 'email',
                    value: Email
                },{
                    name: 'Phone-Number',
                    type: 'tel',
                    value: Phone
                }
                ]}
            />

            <button onClick={()=>{this.toggleInputField('editing')}}>Edit</button>
        </div>);
    }
}

export default Personal;