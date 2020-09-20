import React, { Component } from 'react';

class EventParctice extends Component {
    state = {
        message: '',
    };

    handleGoBack = () => {
        this.props.history.goBack();
    };
    handleGoHome = () => {
        this.props.history.push('/');
    };

    componentDidMount() {
        //this.unblock = this.props.history.block('정말?');
    }
    componentWillUnmount() {
        if (this.unblock) {
            this.unblock();
        }
    }

    handleChange(e) {
        this.setState(
            {
                message: e.target.value,
            },
            () => console.log(this.state.message)
        );
    }
    /*
		setState는 await 가 불가능하다. 그래서 순차실행을 하고 싶다면 위의 코드처럼 써야한다.
		https://medium.com/@saturnuss/setstate-%EB%8A%94-await%EC%99%80-%EC%82%AC%EC%9A%A9%EC%9D%B4-%EA%B0%80%EB%8A%A5%ED%95%A0%EA%B9%8C-7b02581f6df4
	*/

    handleClick = () => {
        alert(this.state.message);
        this.setState({
            message: '',
        });
    };
    /* Propety Initializer Syntax*/

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleClick();
        }
    };
    /*
		1) onKeyDown, onKeyUp은 Keycode값이고, onKeyPress는 ASCII 값이다.
		2) onKeyPress는 ASCII값이기 때문에 shift, ctrl, backspace, tab, 한/영 등의 (토글)키를 인식하지 못한다.

	*/

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요."
                    value={this.state.message}
                    onKeyPress={this.handleKeyPress}
                    onChange={(e) => {
                        this.handleChange(e);
                    }}
                />

                <button onClick={this.handleClick}>확인</button>
                <button onClick={this.handleGoBack}>뒤로</button>
                <button onClick={this.handleGoHome}>홈으로</button>
            </div>
        );
    }
}

export default EventParctice;

/*
SyntheticEvent 및 네이티브 이벤트와 달리 이벤트가 끝나고 나면 이벤트가 초기화되므로 정보를 참조할 수 없다. 예를 들어 0.5초 뒤에 e 객체를 참조하면 e 객체 내부의 모든 값이 비워지게 된다.

그래서 만약 비동기적으로 이벤트 객체를 참조할 일이 있다면 e.persist() 함수를 호출해야 한다.

*/