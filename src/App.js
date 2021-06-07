import logo from './logo.svg';
import './App.css';
import React, {useRef,useEffect} from 'react';

function App() {
  const nameref=useRef();
  const ageref=useRef();
  const marriedref=useRef();
  const submitref=useRef();

  useEffect(()=>{
    nameref.current.focus();
  },[])
 
  const pressKeyHandle = e=>{
    if(e.keyCode===13){
      if(e.target.id==='nameId'){
        ageref.current.focus();
      }
      if(e.target.id==='ageId'){
        marriedref.current.focus();
      }
      if(e.target.id==='marriedId'){
        submitref.current.focus();
      }

    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>UseRef Hooks</h3>
        <div className='form-field'>
          <span>Enter Name</span>
          <input ref={nameref} id='nameId' type='text' name='name' onKeyDown={pressKeyHandle}/>
        </div>
        <div className='form-field'>
          <span>Enter Age</span>
          <input ref={ageref} type='text' id='ageId' name='age' onKeyDown={pressKeyHandle}/>
        </div>
        <div className='form-field'>
          <span>Married</span>
          <input ref={marriedref} type='checkbox' id='marriedId' onKeyDown={pressKeyHandle}/>
        </div>
        <button ref={submitref}>submit</button>
      </header>
    </div>
  );
}

export default App;
