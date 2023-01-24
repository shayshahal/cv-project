import './styles/App.css';
import Personal from './components/Personal';
import React, {Component} from 'react';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Personal/>
      </div>
    );
  }
}

export default App;
