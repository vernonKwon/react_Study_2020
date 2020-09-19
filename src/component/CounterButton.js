import React from 'react';

const CounterButton = ({ plus, minus, background }) => {
    return (
        <div>
            <button onClick={plus}>증가 (+)</button>
            <button onClick={minus}>감소 (-)</button>
            <button onClick={background}>배경 색깔</button>
        </div>
    );
};

export default CounterButton;