# 이 브랜치는 React JS 공부를 위한 브랜치다.
공부하고 있는 교과서는 길벗 출판사의 '리액트를 다루는 기술'이다. 그렇기때문에 책의 코드와 굉장히 흡사할 것이다.


### 목차
1. 라이프사이클 메소드
2. Hooks 사용 방법

---

#### 라이프사이클 메소드

모든 리액트 컴포넌트에는 라이프사이클(수명 주기)이 존재한다. 컴포넌트의 수명은 페이지에 렌더링되기 전인 준비 과정에서 시작하여 페이지에서 사라질 때 끝난다.

리액트 프로젝트를 진행하다보면 컴포넌트를 처음으로 렌더링할 때 어떤 작업을 처리해야하거나 컴포넌트를 업데이터하기 전후로 어떤 작업을 처리해야 할 수도 있고, 또 불필요한 업데이트를 방지해야 할 수도 있다.

이때 컴포넌트의 라이프사이클 메소드를 사용한다. 참고로 **라이프사이클 메소드는 클래스형 컴포넌트에서만 사용할 수 있다. 함수형 컴포넌트에서는 사용할 수 없다.** 그 대신 Hooks 기능을 사용하여 비슷한 작업을 처리할 수 있다. Hooks에 대한 내용은 다음에 다루겠다.

라이프사이클 메소드의 종류는 총 9가지다. Will 접두사가 붙은 메소드는 어떤 작업을 작동하기 **전**에 실행되는 메소드이고, Did 접두사가 붙은 메소드는 어떤 작업을 작동한 **후**에 실행되는 메소드다.

이 메소드는 컴포넌트 클래스에서 덮어 써 선언함으로써 사용할 수 있다.

라이프사이클은 총 세가지, 즉 **마운트, 업데이트, 언마운트** 카테고리로 나눈다.

![0_LuXwdrGj8Couot0B](https://user-images.githubusercontent.com/29453831/92590520-579cb680-f2d7-11ea-8fd1-13520403e3fc.png)

#### 마운트

DOM이 생성되고 웹 브라우저상에 나타나는 것을 마운트(Mount)라고 한다. 이때 호출되는 메소드는 이렇다.

컴포넌트 생성 -> constructor -> getDerivedStateFromProps -> render -> componentDidMount

#### 업데이트

컴포넌트는 총 4가지 경우에 업데이트 한다.

1. props가 바뀔 때
2. state가 바뀔 때
3. 부모 컴포넌트가 리렌더링될 때
4. this.forceUpdate로 강제로 렌더링을 트리거할 때

컴포넌트를 업데이트 할 때 다음의 메소드를 호출한다.

props, state 변경, 부모 컴포넌트 리렌더링 -> getDerivedStateFromProps -> shouldComponentUpdate(true 반환시 render 호출, false 반환 시 여기서 작업 취소) -> render -> getSnapshotBeforeUpdate -> 웹 브라우저상의 실제 DOM 변화 -> componentDidUpdate

컴포넌트는 다양한 이유로 업데이트 될 수 있다.

1. 부모 컴포넌트에서 넘겨주는 props가 바뀔 때

컴포넌트에 전달하는 props의 값이 바뀌면 컴포넌트 렌더링이 이루어진다.

2. 컴포넌트 자신이 들고 있는 state가 setState를 통해 업데이트 될 때

3. 부모 컴포넌트가 리렌더링 될 때

자신에게 할당된 props가 바뀌지 않아도, 또는 자신이 들고 있는 state가 바뀌지 않아도 부모 컴포넌트가 리렌더링되면 자식 컴포넌트도 리렌더링 된다.

#### 언마운트

마운트의 반대 과정, 즉 컴포넌트를 DOM에서 제거하는 것을 언마운트(unmount)라고 한다.

언마운트하기 -> componentWillUnmount

---

### 라이프 사이클 메소드 살펴보기

#### (1) render() 함수

이 메소드는 **컴포넌트의 모양새를 정의한다.** 또 **컴포넌트를 (리)렌더링한다.** 그렇기에 컴포넌트에서 가장 중요한 메소드이다. 그런만큼 라이프사이클 메소드중 유일한 '필수' 메소드다.

이 메소드 안에서 this.props와 this.state에 접근할 수 있으며, 리액트 요소를 반환한다. 여기서 말하는 요소는 div같은 태그가 될 수도 있고, 따로 선언, 제작한 컴포넌트가 될 수도 있다. 아무것도 보여주고 싶지 않다면 null이나 false값을 반환하면 된다.

이 메소드를 사용하기 위한 중요한 사항이 있다.
1. render() 안에서는 이벤트 설정이 아닌 곳에서 setState를 사용하면 안 된다.
2. 브라우저의 DOM에 접근하면 안된다.
3. DOM 정보를 가져오거나 state에 변화를 줄 때는 componentDidMount 메소드를 통해 처리해야한다.

#### (2) constructor 메소드

	constructor(props){
		super(props)
	}

이 메소드는 컴포넌트의 생성자로 컴포넌트를 만들 때 처음으로 실행된다. **이 메소드에서 초기 state를 설정할 수 있다.**
우리가 컴포넌트를 만들게 되면서, Component 를 상속했으며, 우리가 이렇게 constructor 를 작성하게 되면 기존의 클래스 생성자를 덮어쓰게 된다. 그렇기에, 리액트 컴포넌트가 지니고있던 생성자를 super 를 통하여 미리 실행하고, 그 다음에 우리가 할 작업 (state 설정) 을 해주는 것이다.

#### (3) getDerivedStateFromProps 메소드

**props로 받아온 값을 state에 동기화시키는 용도로 사용한다.** 컴포넌트가 마운트될 때와 업데이트될 때 호출된다.
참고로 이 메소드는 리액트 v16.3 이후에 새로 만들어져 그 이전의 리액트에서는 사용할 수 없다.

	static getDerivedStateFromProps(nextProps, prevState){
		if(nextProps.value !== prevState.value) {
			return {value : nextProps.value}
		}
		return null
	}
	
여기서 props 와 state 의 차이를 짚고 가자면

props 는 부모 컴포넌트가 자식 컴포넌트에게 주는 값이다. 자식 컴포넌트에서는 props 를 받아오기만하고, 받아온 props 를 직접 수정 할 수 없다. 반면에 state 는 컴포넌트 내부에서 선언하며 내부에서 값을 변경 할 수 있다.

#### componentDidMount 메소드
	componentDidMount() {...}
	
**컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메소드이다.** 컴포넌트를 만들고, 첫 랜더링이 끝난 뒤에 실행한다.  이 안에서 다른 자바스크립트 라이브러리 or 프레임워크 함수를 호출하거나 이벤트 등록, setTimeout, setInterval, 네트워크 요청같은 비동기 작업을 처리하면 된다.

#### shouldComponentUpdate 메소드
	shouldComponentUpdate(nextProps, nextState) {...}
이것은 props or state를 변경했을때, **리렌더링을 시작할지 여부를 지정하는 메소드다**. 이 메소드에서는 반드시 true or false를 반환해야 한다. 컴포넌트를 만들 때 이 메소드를 따로 생성하지 않으면 기본적으로 언제나 true값을 반환한다. 이 메소드가 true를 반환하면 다음 라이프사이클 메소드를 계속 실행하고, false값을 반환한다면 업데이트 과정은 여기서 중지된다. 즉, 컴포넌트가 리렌더링되지 않는다. 만약 this.forceUpdate() 함수를 호출한다면 이 과정을 생략하고 바로 render 함수를 호출한다.

이 메소드 안에서 현재 props와 state는 this.props와 this.state로 접근하고, 새로 설정될 props 또는 state는 nextProps와 nextState로 접근할 수 있다.

프로젝트 성능을 최적화할 때, 상황에 맞는 알고리즘을 작성하여 리렌더링을 방지할 때는 false값을 반환하게 한다. 

#### getSnapshopBeforeUpdate 메소드
이 메소드는 **render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출된다.** 이 메소드에서 반환하는 값은 componentDidUpdate에서 세번째 파라미터인 snapshot 값으로 전달 받을 수 있다. 주로 업데이트 하기 직전의 값을 참고할 일이 있을 때 활용한다. 예를 들면 스크롤바 위치 유지 같은 것 말이다.
이 메소드는 리액트 16.3 이후 만들어졌다.

	getSnapshopBeforeUpdate(preProps, prevState) {
		if(preProps.array !== this.state.array){
			const {scrollTop, scrollHeight} = this.list
			return {scrollTop, scrollHeight}
		}
	}
	
#### componentDidUpdate

	componentDidUpdate(prevProps, prevState, snapshot) {...}
	
이것은 **리렌더링, 업데이트를 완료한 후 실행한다.** 업데이트가 끝난 직후이기 때문에 DOM 관련 처리를 해도 무방하다. 여기서는 prevProps or prevState를 사용하여 컴포넌트가 이전에 가졌던 데이터에 접근할 수 있다. 또 getSnapshotBeforeUpdate에서 반환한 값이 있다면 여기서 snapshot값을 전달받을 수 있다.

#### componentWillUnmount 메소드
	componentWillUnmount() {...}
이것은 **컴포넌트를 DOM에서 제거할 때, 제거하기 전에 실행한다.** componentDidMount에서 등록한 이벤트, 타이머, 직접 생성한 DOM이 있다면 여기서 제거 작업을 해야 한다.

#### componentDidCatch 메소드
컴포넌트 렌더링 도중에 에러가 발생했을 때 애플리케이션이 먹통이 되지 않고 오류 UI를 보여줄 수 있게 해준다. 사용방법은 이러하다.

	componentDidCatch(error, info){
		this.setState({
			error:true
		})
		
		console.log({error, info})
	}
	
여기서 error은 파라미터에 어떤 에러가 발생했는지 알려주고, info 파라미터는 어디에 있는 코드에서 오류가 발생했는지에 대한 정보를 준다. 위의 코드에서는 console.log만 했지만 나중에 실제로 사용할 때 오류가 발생하면 서버 API를 호출하여 따로 수집할 수도 있다.

그러나 이 메소드는 컴포넌트 자신에게 발생하는 에러를 잡아낼 수 없고 자신의 this.props.children오르 전달되는 컴포넌트에서 발생하는 에러만 잡아낼수 있다. 
이 메소드는 리액트 v16에서 도입됐다.
componentDidCatch 메소드는 리액트 v16에서 새롭게 도입됐다.

---
### Hooks 사용 방법

Hooks은 리액트 v16.8에 새로 도입된 기능으로 함수형 컴포넌트에서도 상태 관리를 할 수 있는 useState, 렌더링 직후 작업을 설정하는 useEffect등의 기능을 제공하여 기존의 함수형 컴포넌트에서 할 수 없었던 다양한 작업을 할 수 있게 해준다.
*React Native는 v0.59부터 Hook을 지원한다.*

#### setState

	import React, { useState } from 'react';

	const [message, setMessage] = useState('');
이 문장은 배열 비구조화 할당 문법이다.

setMessage 변수는 message의 setter 역할을 한다. 단어를 자동으로 인식하는것이 아니다.
	
예를 들어

	'const [a, b] = useState('');'
	
이 문장을 썼을때 b변수는 a변수의 setter 역할을 하게된다.
	
배열의 첫번째 원소는 현재 상태(변수)이고 두번째 원소는 상태를 바꾸어주는 '함수'이다. 이 함수는 setter 함수라고 부른다.
	
useState의 인자에는 초기값을 넣어주면 된다. 값의 형태는 자유다. 숫자, 문자열, 객체, 배열 전혀 상관 없다.

주의해야 할 점은 state값을 바꿀때는 setState 혹은 useState를 통해 전달받은 세터 함수를 써야한다.

이런 코드는 잘못된 코드이다.

	//클래스형 컴포넌트에서...
	this.state.number = this.state.number + 1;
	this.state.array = this.array.push(2);
	this.state.object.value = 5;
	
	//함수형 컴포넌트에서...
	const [object, setObject] = useState({a:1, b:1});
	object.b = 2;
	
그러면 배열이나 객체를 업데이트해야 할 때는 어떻게 해야할까? 그럴때는 배열이나 객체 사본을 만들고 그 사본에 값을 업데이트 한 후, 그 사본의 상태를 setState 혹은 세터 함수를 통해 업데이트 한다.

	//객체 다루기
	const object = {a : 1 , b : 2, c : 3};
	const nextObject = {...object, b : 2};
	
	//배열 다루기
	const array = [
	{id : 1, value : true},
	{id : 2, value : true},
	{id : 3, value : false}
	];
	
	let nextArray = array.concat({id:4}) // 새 항목 추가
	nextArray.filter(item => item.id !== 2); // id가 2인 항목 제거
	nextArray.map(item => (item.id === 1 ? {...item, value : false} : item)) // id가 1인 항목의 value 를 false로 설정
	
객체의 사본을 만들때는 spread(전개) 연산자라고 불리는 ...을 사용하고 처리하고, 배열에 대한 사본을 만들 때는 배열의 내장 함수를 활용한다. 이에 대한 자세한 내용은 나중에 따로 다뤄보자

참고 링크 : https://velopert.com/3629

여러개의 상태를 관리해야 할때는 그냥 useState를 여러개 쓰면 된다.

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
	
	
#### useReducer

useReducer은 useSate보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트를 해주고싶을때 사용하는 Hook이다.

리듀서는 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션(Action)값을 전달받아 새로운 상태를 반환하는 함수다.
리듀서 함수에서 새로운 상태를 만들 때는 반드시 불변성을 지켜주어야한다.

	function reducer(state, action){
		return {...} // 불변성을 지키면서 업데이트한 새로운 상태를 반환한다.
	}
	
액션값은 주로 다음과 같은 형태로 이루어져있다.

	{
		type : 'INCREMENT'
	}	
	
17장에서 다룰 리덕스에서 사용하는 액션 객체에는 어떤 액션인지 알려주는 type 필드가 꼭 있어야 하지만, useReducer에서 사용하는 액션 객체는 반드시 type을 지니고 있을 필요가 없다. 심지어 객체가 아니라 문자열이나 숫자여도 상관 없다.


	import React, { useReducer } from 'react'
	
	const [state, dispatch] = useReducer(reducer, {value : 0})
	
	function reducer(state, action){
		switch(action.type){
			case 'INCREMENT': return { value: state.value + 1 };
        	case 'DECREMENT': return { value: state.value - 1 };
        	default: return state;
		}
	}
	
useReducer의 첫번째 파라미터에는 **리듀서 함수를 넣고**, 두번째 파라미터에는 **해당 리듀서의 기본값을 넣어준다.**

이 Hook을 사용하면 state값과 dispatch 함수를 받아오는데 여기서 state는 현재 가르키고 있는 상태고, dispatch는 액션을 발생시키는 함수다. dispatch(action)과 같은 형태로, 함수 안에 파라미터로 액션 값을 넣어주면 리듀서 함수가 호출되는 구조다.

useReducer를 사용했을 때의 가장 큰 장점은 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다는 것이다.

#### useMemo

useMemo를 사용하면 함수형 컴포넌트 내부에서 발생하는 연산을 최적화 할 수 있다.

	import React, { useMemo } from 'react'
	
	const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
	
Memo 는 "memoized" 를 의미하는데, 이는, 이전에 계산 한 값을 재사용한다는 의미를 가지고 있다.
첫번째 인자는 결과값을 생성해주는 팩토리 함수이고, 두번째는 인자는 결과값 재활용할 때 기준이되는 입력값 배열이다.

x와 y 값이 이 전에 랜더링했을 때와 동일할 경우, 이 랜더링 때 구했던 결과값을 재활용한다. 하지만, x와 y 값이 이 전에 랜더링했을 때와 달라졌을 경우, () => compute(x, y) 함수를 호출하여 결과값을 z에 할당해준다.

#### useCallback

useCallback은 useMemo와 상당히 비슷한 함수이다. 주로 렌더링 성능을 최적화해야 하는 상황에 사용한다. 이 Hook을 사용하면 이벤트 핸들러 함수를 필요할 때만 생성할 수 있다.


	const onChange = (e) => {
			setNumber(e.target.value);
		};

	const onInsert = (e) => {
		let nextList;

		nextList = list.concat(parseInt(number));
		setList(nextList);
		setNumber('');
	};
	
이 함수를 useMemo를 이용해서 코드를 작성하면 컴포넌트가 리렌더링될 때마다 이 함수들이 새로 생성된다.
대부분의 경우 이러한 방식은 문제가 없지만, 컴포넌트의 렌더링이 자주 발생하거나 렌더링해야 할 컴포넌트의 개수가 많아지면 문제가 생겨 이 부분을 최적화 해줘야한다


	import React, { useState, useMemo, useCallback } from 'react';

	const onChange = useCallback((e) => {
			setNumber(e.target.value);
		},[]); // 컴포넌트가 처음 렌더링 될 때만 함수 생성

    const onInsert = useCallback((e) => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    }, [number, list]); // number or list가 바뀌었을 때만 함수 생성
	
useCallback의 첫번째 파라미터에는 생성하고 싶은 함수를 넣고, 두번째 파라미터에는 배열을 넣으면 된다. 이 배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지 명시해야 한다.

ohChange처럼 비어있는 배열을 넣게 되면 컴포넌트가 렌더링 될 때 단 한번만 함수가 생성되며, onInsert처럼 배열 안에 number과 list를 넣게 되면 배열 안의 내용이 바뀌거나 (배열에)새로운 항목이 추가될 때마다 함수가 생성된다.

함수 내부에서 상태 값에 의존해야 할 때는 그 값을 반드시 두 번째 파라미터 안에 포함시켜 주어야 한다. 예를 들어 onChange의 경우 기존의 값을 조회하지 않고 바로 설정만 하기 때문에 배열이 비어있어도 상관없지만, onInsert는 기존의 number과 list를 조회해서 nextList를 생성하기때문에 배열안에 number과 list를 꼭 넣어주어야 한다.

useCallback은 결국 useMemo를 함수로 반환하는 상황에서 더 편하게 사용할 수 있는 Hook이다. 숫자, 문자열, 객체처럼 일반 값을 재사용 하려면 useMemo를 사용하고, 함수를 재사용하려면 useCallback를 사용하면 된다.


#### useRef

	import React, { useRef } from 'react';
	const refContainer = useRef(initialValue);
	
useRef는 .current 프로퍼티로 전달된 인자(initialValue)로 초기화된 변경 가능한 ref 객체를 반환한다. 반환된 객체는 컴포넌트의 전 생애주기를 통해 유지될 것이다.

	function TextInputWithFocusButton() {
	  const inputEl = useRef(null);
	  const onButtonClick = () => {
		// `current` points to the mounted text input element
		inputEl.current.focus();
	  };
	  return (
		<>
		  <input ref={inputEl} type="text" />
		  <button onClick={onButtonClick}>Focus the input</button>
		</>
	  );
	}

본질적으로 useRef는 .current 프로퍼티에 변경 가능한 값을 담고 있는 “상자”와 같다.

DOM에 접근하는 방법으로 refs에 친숙할것 같다. 만약 <div ref={myRef} />를 사용하여 React로 ref 객체를 전달한다면, React는 모드가 변경될 때마다 변경된 DOM 노드에 그것의 .current 프로퍼티를 설정할 것이다.

그렇지만, ref 속성보다 useRef()가 더 유용하다. 이 기능은 클래스에서 인스턴스 필드를 사용하는 방법과 유사한 어떤 가변값을 유지하는 데에 편리하다.

이것은 useRef()가 순수 자바스크립트 객체를 생성하기 때문이다. useRef()와 {current: ...} 객체 자체를 생성하는 것의 유일한 차이점이라면 useRef는 매번 렌더링을 할 때 동일한 ref 객체를 제공한다.

.current 프로퍼티를 변형하는 것이 리렌더링을 발생시키지는 않습니다. 만약 React가 DOM 노드에 ref를 attach하거나 detach할 때 어떤 코드를 실행하고 싶다면 대신 콜백 ref를 사용하는 것이 좋다.


#### Hook 정리

리액트에서 Hooks 패턴을 사용하면 클래스형 컴포넌트를 작성하지 않고도 대부분의 기능을 구현할 수 있다. 이런 기능이 리액트에 릴리즈되었다고 해서 기존의 setState를 사용하는 방식이 잘못된 것은 아니다.

리액트 문서는 기본의 클래스형 컴포넌트는 앞으로도 사라지지 않고 계속해서 지원될 예정이라고 한다. 그렇기때문에 만약 유지 보수하고 있는 프로젝트에서 클래스형 컴포넌트를 사용하고 있다면, 이를 굳이 함수형 컴포넌트와 Hooks를 사용하는 형태로 전환할 필요는 없을것이다. 

다만, 리액트 문서는 새로 작성하는 컴포넌트의 경우 함수형 컴포넌트와 Hooks를 사용할 것을 권장하고 있다.

그 이유는 여기서 자세히 설명하고 있다.

1. https://medium.com/@ehddnjs8989/react-hooks-%EC%82%AC%EC%9A%A9%EC%9D%B4%EC%9C%A0-ce03c66a53b0
2. https://ko.reactjs.org/docs/hooks-intro.html


---


#### Strict 모드
리액트 생명주기를 공부하다 다음과 같은 오류를 겪었다.

![스크린샷, 2020-09-06 18-31-30](https://user-images.githubusercontent.com/29453831/92322899-38035500-f06f-11ea-972f-85459818a4f8.png)

constructor, getDerivedStateFromProps, render 메소드가 두번씩 실행되고 있는 것이었다.

아무리 봐도 코드상에는 문제될 것이 없다. 부모 뷰를 랜더링 하는 과정에서 생긴 기록인가 했지만 부모 뷰엔 render() 메소드만 존재하고 그마저도 console.log() 명령어는 존재하지 않았다.

분명히 리액트 자체의 문제였다. 그래서 'react 16.13.1 lifeCycle'라고 검색을 하니 stackoverflow에 만족할만한 답이 하나 있었다.

![스크린샷, 2020-09-06 18-40-10](https://user-images.githubusercontent.com/29453831/92323043-6afa1880-f070-11ea-8767-73e9281469ef.png)

그러니까 index.js의 <React.StrictMode>안에 있는 strict mode가 이런 현상을 만든다는 것이었고 <App /> 바깥에 있는 <React.StrictMode>를 unwrap하면 it'll work just find한다는 답변이 있었다. (it'll work just find의 의미가 이해는 되는데 한국말로 뭐라고 번역해야 할지 모르겠다... ㅠ)

이 답변대로 <React.StrictMode> 태그를 없앴더니 각 생명주기는 한번씩만 실행이 됐다.
![스크린샷, 2020-09-06 18-51-58](https://user-images.githubusercontent.com/29453831/92323239-0cce3500-f072-11ea-9b36-69cbea1dd72b.png)

ko.reactjs.org에서는 이렇게 나와있다.

	Strict 모드는 개발 모드에서만 활성화되기 때문에, 프로덕션 빌드에는 영향을 끼치지 않습니다.
	
이 말대로라면 생명주기를 통한 동작을 구성할때만 위의 방법을 적용하면 되겠다. 

리액트의 생명주기 구성은 이러하다

![생명주기](https://user-images.githubusercontent.com/29453831/92323890-3c337080-f077-11ea-87da-0b7f6a074aca.png)