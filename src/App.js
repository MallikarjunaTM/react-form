import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
let born=false;
function App() {
  const [growth,setGrowth]=useState(0);
  const [nirvana,setNirvana]=useState(false);
  
  useEffect(()=>{
    if(born){
      document.title='Nirvana attained'
    }
  },[nirvana])

  useEffect(()=>{
    console.log('born')
  },[]);

  useEffect(()=>{
    if(born){
    console.log('make mistake and learn');
    }
    else{
      born=true;
    }

    if(growth>70){
      setNirvana(true);
    }

    return function cleanUp(){
      console.log('cleanup mistakes');
    }
  })

  const growthHandle =e=>{
    setGrowth(growth+10);
  }
  return (
    <div className="App">
      <header className="App-header">
      <h1>Use Effect</h1>
      <h1>Growth:{growth}</h1>
      <button onClick={growthHandle}>Learn and grow</button>      
      </header>
    </div>
  );
}

export default App;
