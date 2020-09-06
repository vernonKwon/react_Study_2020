import React, { useState } from 'react';
const IterationSample = () => {
    const [names, setNames] = useState([
        { id: 1, text: '눈사람' },
        { id: 2, text: '얼음' },
        { id: 3, text: '눈' },
        { id: 4, text: '바람' },
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(names.length + 1);
    const onChange = (e) => {
        setInputText(e.target.value);
    };

    const namesList = names.map((name) => {
        return (
            <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
                {name.id} : {name.text}
            </li>
        );
    });

    const onRemove = (id) => {
        setNames(names.filter((name) => name.id !== id));
    };

    const onClick = () => {
        const nextNames = names.concat({ id: nextId, text: inputText });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    };

    return (
        <div>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{namesList}</ul>
        </div>
    );
};
export default IterationSample;