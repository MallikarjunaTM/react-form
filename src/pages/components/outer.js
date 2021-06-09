import React from 'react';
import Inner from './inner';

function Outer(){
    return <div>
        <h2>Outer</h2>
        <Inner></Inner>
    </div>
}

export default Outer;