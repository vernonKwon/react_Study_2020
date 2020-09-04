import React, { useState } from 'react';

const Say = () => {
    const [message, setMessage] = useState('안녕히 잘 가라');
	const [color, setColor] = useState('black')
    const onClickEnter = () => setMessage('안녕하세요!');
    const onClickLeave = () => setMessage('안녕히 가세요.');

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
			<h1 style = {{color}}>{message}</h1>
			
			<button style={{color : 'red'}} onClick={()=>{setColor('red')}}>빨강</button>
			<button style={{color : 'green'}} onClick={()=> setColor('green')}>초록</button>
			<button style={{color : 'blue'}} onClick={()=> setColor('blue')}>파랑</button>
        </div>
    );
};

export default Say;

/*
Hooks 사용 방법

	const [message, setMessage] = useState('');
	배열 비구조화 할당 문법
	
	setMessage 변수는 message의 setter 역할을 한다. 단어를 자동으로 인식하는것이 아니다.
	예를 들어 'const [a, b] = useState('');'
	라는 문장을 썼을때 b변수는 a변수의 setter 역할을 하게된다.
	
	배열의 첫번째 원소는 현재 상태(변수)이고 두번째 원소는 상태를 바꾸어주는 '함수'이다. 이 함수는 setter 함수라고 부른다.
	
	useState의 인자에는 초기값을 넣어주면 된다. 값의 형태는 자유다. 숫자, 문자열, 객체, 배열 전혀 상관 없다.
*/