import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, NavLink, Redirect,Prompt } from 'react-router-dom';
import AboutPage from './component/AboutPage';
import messageContext from './context/messageContext';
import HomePage from './component/HomePage';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [age,setAge] = useState(null);
  const [message,setMessage] = useState('I am being Shared');
  const handleClicked = e => {
    setLoggedIn(!loggedIn);
  }

  const handleChange = e =>{
    setAge(e.target.value);
  }

  return (
    <BrowserRouter>
    <messageContext.Provider value={[message,setMessage]}>
      <div className="App">
        <header className="App-header">
          <ul className='ul-style'>
            <li className='li-style'><NavLink className='App-link' to='/' exact activeClassName='link-style' >HomePage</NavLink></li>
            <li className='li-style'><NavLink className='App-link' to='/about' exact activeClassName='link-style' >About</NavLink></li>
            <li className='li-style'><NavLink className='App-link' to='/user/jhon/jhonson' exact activeClassName='link-style' >User Jhon Doe</NavLink></li>
          </ul>
          <Prompt when={ loggedIn && !age } message={(location)=>
          location.pathname.startsWith('/user')?true:'are you sure'}/>
          <Route path='/' exact render={()=><HomePage/>}/>
          <Route path='/about' exact component={AboutPage} />
          <Route path='/user/:firstName/:lastName'
            exact render={({ match }) => {
              return loggedIn ?
                
              (
                <div>
                <h1>Age:{age}</h1>  
                <input type='text' value={age} onChange={handleChange}/>
                Welcome:{match.params.firstName}{match.params.lastName}</div>) :
                (<Redirect to='/'></Redirect>)
            }} />
          <button className='button' onClick={handleClicked}>{loggedIn ? 'logout' : 'login'}</button>
        </header>
      </div>
      </messageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
