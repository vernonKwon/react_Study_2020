import React, { useState } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickName, setNickName] = useState('');

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

// 하나의 useState 함수는 하나의 상태값만 관리할 수 있다. 컴포넌트에서 관리해야 할 상태가 여러개라면 useState를 여러 번 사용하면 된다.

