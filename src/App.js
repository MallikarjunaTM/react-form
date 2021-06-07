import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [name,setName]=useState("");
  const [income,setIncome]=useState("");

  const handleChangeName=e=>{
    const value=e.target.value;
    const name=e.target.name;
    console.log(value);
    console.log(name)
    if(name==='name'){
      setName(value);
    }

    if(name==='income'){
      setIncome(value)
    }
    
  }

  const handleSubmit=e=>{
    console.log("state  ",name);
    e.preventDefault();
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <div>
            <span>Enter a Name:</span>
            <input type='text' name='name' value={name}  onChange={handleChangeName}/>
          </div>
          <div>
            <span>Enter a Income:</span>
            <select name='income' value={income} onChange={handleChangeName}>
              <option value='High'>High</option>
              <option value='Mid'>Mid</option>
              <option value='Low'>Low</option>
            </select>
          </div>
          <input type='submit' name='submit'/>
        </form>
      </header>
    </div>
  );
}

export default App;
