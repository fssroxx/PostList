import React, {useState} from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    function inc() {
        setCounter(s => s+1)
    }
    function dec() {
        setCounter(s => s-1)
    }
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={inc}>Incr</button>
            <button onClick={dec}>Dec</button>
        </div>
    );
};

export default Counter;