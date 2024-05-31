import { useState, useEffect } from 'react';

function Stopwatch() {
    const [time, setTime] = useState(0);
    const [active, setActive] = useState(false);

    useEffect(() => {

        let interval;

        if(active) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime +1);
            }, 1000);
        }else {
            clearInterval(interval);
        }

        return ()=> clearInterval(interval);
    }, [active]);

    function handleActive() {
        setActive(!active);
    }

    function handleReset() {
        setActive(false);
        setTime(0);
    }
 
    return (
        <>
        <h1>STOPWATCH</h1>
        <div>
            <p>seconds: {time}</p>
            <button onClick={handleActive} > {active ? "Stop" :"Start" }</button>
            <button onClick={handleReset} > Reset </button>
        </div>
        </>
    );
}

export default Stopwatch;