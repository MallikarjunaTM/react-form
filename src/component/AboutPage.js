import React,{useContext} from 'react'
import messageContext from '../context/messageContext';
import Outer from '../pages/components/outer';
function AboutPage(){
    
    return <div>
        
        <h1>About previousAge</h1>
        <h2>message:{useContext(messageContext)}</h2>
        <Outer></Outer>
        </div>;
}

export default AboutPage;