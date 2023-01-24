import './styles/App.css';
import Personal from './components/Personal';
import React, {Component} from 'react';
import Education from './components/Education';
import Practical from './components/Practical';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Personal/>
        <Education/>
        <Practical/>
      </div>
    );
  }
}

export default App;
