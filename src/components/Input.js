import React from "react";

const Input=({placeholder,style,onKeyDown},ref)=>(
    <input ref={ref} onKeyDown={onKeyDown} type='text' placeholder={placeholder} style={style}/>
);

const ForwardInput=React.forwardRef(Input);

export default ForwardInput;