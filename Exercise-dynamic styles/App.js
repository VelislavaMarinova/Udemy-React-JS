import React from 'react';
import { useState } from 'react';
import './style.css';

// don't change the Component name "App"
export default function App() {
    const [isClicked, setIsClicked] = useState(false)

    const clickHandler = () => {
        if (isClicked) {
            setIsClicked(false)
        }
        setIsClicked(true)
    }

    return (
        <div>
            <p style={{ color: isClicked ? "red" : "white" }}>Style me!</p>
            <button onClick={clickHandler}>Toggle style</button>
        </div>
    );
}
