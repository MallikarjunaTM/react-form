import {useContext} from 'react';
import messageContext from '../context/messageContext';

const HomePage =()=>(

    <div>
        <h1>HomePage</h1>
        <h1>Message:{useContext(messageContext)}</h1>
    </div>

);

export default HomePage;