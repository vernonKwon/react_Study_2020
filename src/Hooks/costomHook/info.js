import React from 'react';
import useInput from './useInput';


const Info = () => {
    const [state, onChange] = useInput({ name: '', nickname: '' });

    const { name, nickname } = state; // 비구조화 할당

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange}></input>
            </div>
            <div>
                <b>이름 : </b>
                {name}
            </div>

            <div>
                <b>닉네임 : </b>
                {nickname}
            </div>
        </div>
    );
};

export default Info;