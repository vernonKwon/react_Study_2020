import React, { useState, useEffect } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickName, setNickName] = useState('');

    useEffect(() => {
        console.log('렌더링이 완료되었습니다!');
		console.log('마운트될 때만 실행됩니다.')
        console.log({
            name,
            nickName,
        });
    },[]);

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeNickName = (e) => {
        setNickName(e.target.value);
    };

    return (
        <div>
            <input onChange={onChangeName}></input>
            <input onChange={onChangeNickName}></input>

            <div>
                <b> 이름 : </b>
                {name}
            </div>

            <div>
                <b> 닉네임 : </b>
                {nickName}
            </div>
        </div>
    );
};

export default Info;

//useEffect는 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook이다. 클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태로 봐도 무방하다.
