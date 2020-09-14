import React, { useState, useRef, useCallback } from 'react';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: '전역하고싶다', checked: true },
        { id: 2, text: '마스터 치킨 사주세요.', checked: false },
        { id: 3, text: '뿌링클 사랑해요', checked: true }
    ]);

    const nextId = useRef(todos.length + 1)

    const onInsert = useCallback(
        (text) => {
			
			console.log(nextId.current)
            const todo = {
                id: nextId.current,
                text,
                checked: false,
            };
            setTodos(todos.concat(todo))
            nextId.current += 1;
        },
        [todos]
    );

    const onRemove = useCallback(
        (id) => {
            setTodos(todos.filter((todo) => todo.id !== id));
        },
        [todos]
    );

    const onToggle = useCallback((id) => {
        setTodos(
            todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo))
        );
    }, [todos]);

    return (
        <div>
            <TodoTemplate>
                <TodoInsert onInsert={onInsert} />
                <TodoList todos={todos} onRemove={onRemove} onToggle = {onToggle} />
            </TodoTemplate>
        </div>
    );
};
export default App;