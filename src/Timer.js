import React, { useState } from 'react';
import "./App.css";


const Timer = () => {
    const [time, setTime] = useState(90);
    const startTimer = () => {
        setInterval(() => setTime(time - 1), 60000)
    }
    return <div >
        <
        div className = "timer" > 00: 03 < /div> <
        button onClick = {
            () => startTimer() } > Start TImer < /button> <
        /div>
}

export default Timer;