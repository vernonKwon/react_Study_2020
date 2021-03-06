import React, { useReducer } from 'react';

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value,
    };
}

const Info = () => {
    const [state, disPatch] = useReducer(reducer, { name: '', nickname: '' });

    const { name, nickname } = state; // 비구조화 할당

    const onChange = (e) => {
        disPatch(e.target);
    };

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