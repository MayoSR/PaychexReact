import React, { useState, useEffect } from "react";

export default function Timer(props) {
  const [seconds, setSeconds] = useState(0);
  
    const {isActive, setIsActive} = props;

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);


  return (
    <div>
      <div className="time"><h1>Time Taken: {seconds}s</h1></div>
    </div>
  );
}
