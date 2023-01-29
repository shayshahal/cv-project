import './styles/App.css';
import Personal from './components/Personal';
import React, {useState} from 'react';
import Education from './components/Education';
import Practical from './components/Practical';
import uniqid from 'uniqid'
export default function App(){
  const [educations, setEducations] = useState([<Education onDelete={removeComp} key={uniqid()} ind={0}/>]);
  const [jobs, setJobs] = useState([<Practical onDelete={removeComp} key={uniqid()} ind={0}/>]);
  
  function addComp(comp){
    comp.type === Practical 
      ? setJobs([...jobs,comp]) 
      : setEducations([...educations,comp])
  }
  function removeComp(ind, type){
    console.log(ind)
    type === Practical
      ? setJobs(jobs.filter(j=> j.props.ind !== ind))
      : setEducations(educations.filter(e=> e.props.ind !== ind))
  }

    return (
      <div className="App">
      <Personal/>
      <div className='sectionList'>
        <h1 className='EducationTitle'>My Education</h1>
        {educations}
        <button className='add' onClick={()=>{addComp(<Education onDelete={removeComp} key={uniqid()} ind={educations.length}/>)}}>+</button>
      </div>
      <div className='sectionList'>
        <h1 className='PracticalTitle'>My Experience</h1>
        {jobs}
        <button className='add' onClick={()=>{addComp(<Practical onDelete={removeComp} key={uniqid()} ind={jobs.length}/>)}}>+</button>
      </div>
    </div>
  );
}