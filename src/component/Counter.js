import React, { useState } from 'react';
import CounterButton from './CounterButton';
import CounterNumber from './CounterNumber';

const Counter = () => {
    const [number, setNumber] = useState(3);
	console.log(JSON.stringify(number))
    return (
        <div>
            <CounterNumber number={number} />
            <CounterButton number={number} />
        </div>
    );
};

export default Counter;