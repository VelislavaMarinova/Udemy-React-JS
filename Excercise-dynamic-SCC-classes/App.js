import React from 'react';
import {useState}from 'react'

// don't change the Component name "App"
export default function App() {
    const [isActive, setIsActive]=useState(false);
    const clickHandler=()=>{
        if(isActive){
            setIsActive(false)
        }
        setIsActive(true)
    }
    
    return (
        <div>
            <p className = {isActive? 'active':''}>Style me!</p>
            <button onClick={clickHandler}>Toggle style</button>
        </div>
    );
}