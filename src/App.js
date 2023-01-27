import './styles/App.css';
import Personal from './components/Personal';
import React, {Component} from 'react';
import Education from './components/Education';
import Practical from './components/Practical';
import uniqid from 'uniqid'
class App extends Component{
  constructor(props){
    super(props);
    this.addComp = this.addComp.bind(this);
    this.removeComp = this.removeComp.bind(this);
    this.state = {
      educations: [<Education key={uniqid()} onDelete={this.removeComp} ind={0}/>],
      jobs: [<Practical key={uniqid()} onDelete={this.removeComp} ind={0}/>]
    }
  }
  
  addComp(comp){
    comp.type === Practical 
      ? this.setState({jobs: [...this.state.jobs,comp]}) 
      : this.setState({educations: [...this.state.educations,comp]})
  }
  removeComp(ind, type){
    console.log(ind)
    type === Practical
      ? this.setState({jobs: this.state.jobs.filter((j, i)=> j.props.ind !== ind)})
      : this.setState({educations: this.state.educations.filter(e=> e.props.ind !== ind)})
  }

  render(){
    return (
      <div className="App">
        <h1 className='appTitle'>CV Maker</h1>
        <Personal/>
        <div className='sectionList'>
          <h1 className='EducationTitle'>My Education</h1>
          {this.state.educations}
          <button className='add' onClick={()=>{this.addComp(<Education onDelete={this.removeComp} key={uniqid()} ind={this.state.educations.length}/>)}}>+</button>
        </div>
        <div className='sectionList'>
        <h1 className='PracticalTitle'>My Experience</h1>
          {this.state.jobs}
          <button className='add' onClick={()=>{this.addComp(<Practical onDelete={this.removeComp} key={uniqid()} ind={this.state.jobs.length}/>)}}>+</button>
        </div>
      </div>
    );
  }
}

export default App;
