import logo from './logo.svg';
import './App.css';
import React, {useRef,useEffect} from 'react';
import Input from './components/Input';
function App() {
 const inputStyle={
   marginBottom:'5px',
   width:'400px',
   height:'40px',
   fontSize:'30px'
 }
 const firstnameRef=useRef();
 const lastnameRef=useRef();

 useEffect(()=>{
   firstnameRef.current.focus();
 },[])

 const onFirstNameKeyDown = (e)=>{
   if(e.key==='Enter'){
     lastnameRef.current.focus();
   }
 }

 const onLastNameKeyDown = e =>{
   
 }

  return (
    <div className="App">
      <header className="App-header">
        <Input ref={firstnameRef} onKeyDown={onFirstNameKeyDown} placeholder="enter your first name" style={inputStyle}/>
        <Input ref={lastnameRef} onKeyDown={onLastNameKeyDown} placeholder="enter your last name" style={inputStyle}/>
      </header>
    </div>
  );
}

export default App;
