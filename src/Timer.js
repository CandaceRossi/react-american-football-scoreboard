import React, { useState } from "react";
import "./App.css";

const Timer = () => {
  const [time, setTime] = useState(90);
  const startTimer = () => {
    setInterval(() => setTime(time - 1), 60000);
  };
  return (
    <div>
      <div className="timer"> {time} </div>

      <button
        onClick={() => {
          startTimer();
        }}
      >
        Start Timer
      </button>
    </div>
  );
};

export default Timer;
