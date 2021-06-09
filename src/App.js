import './App.css';
import React, {useState,useEffect,useMemo} from 'react';
import Child from './component/Child';


let initXY={
  x:null,
  y:null
}

let initialprofile={
  public_repos:null,
  followers:null
}


function App() {

  const [time,setTime]=useState(Date);
  const [xy,setXY]=useState(initXY);
  const [profile,setProfile]=useState(initialprofile);
  const [k,setK]=useState(0);
  async function getProfile(){
    const resp = await fetch('https://api.github.com/users/gitmil');
    const response = await resp.json();
    setProfile({
      public_repos:response.public_repos,
      followers:response.followers
    })

  }

  useEffect(()=>{
    getProfile()
  },[])

  useEffect(()=>{
    let handle=setInterval(()=>{
      setTime(Date)},1000)

      return ()=>{
        clearInterval(handle);
      }
  })

  const mousemoveon = e =>{
    setXY({
      x:e.clientX,
      y:e.clientY
    })
  }
  useEffect(()=>{
    window.addEventListener('mousemove',mousemoveon)
    return ()=>{
      window.removeEventListener('mousemove',mousemoveon)
    }
  })

  const onClickhandle=e=>{
    setK(k+1);
  }

  const memoChild=useMemo(()=>{
        return <Child></Child>
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Current date & Time is:{time}</h1>
        <h2>{`x:${xy.x}, y:${xy.y}`}</h2>
        <h1>Profile:{`followers:${profile.followers}: public_repos:${profile.public_repos}`}</h1>
        <h1>UseMemo</h1>
        <h2>I:{k}</h2>
        <button onClick={onClickhandle}>Increment I</button>
        <Child></Child>
        <h1>useMemo</h1>
        {memoChild}
      </header>
    </div>
  );
}

export default App;
