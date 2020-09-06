# 이 브랜치는 React JS 공부를 위한 브랜치다.



### 목차
1. Hooks 사용 방법
2. 라이프사이클 메소드
 
---
#### (1) Hooks 사용 방법

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
	
그러면 배열이나 객체를 업데이트해야 할 때는 어떻게 해야할까요? 그럴때는 배열이나 객체 사본을 만들고 그 사본에 값을 업데이트 한 후, 그 사본의 상태를 setState 혹은 세터 함수를 통해 업데이트 한다.

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
	
객체의 사본을 만들때는 spread 연산자라고 불리는 ...을 사용하고 처리하고, 배열에 대한 사본을 만들 때는 배열의 내장 함수를 활용한다. 이에 대한 자세한 내용은 나중에 따로 다뤄보자
	
---

#### 라이프사이클 메소드

##### (1) render() 함수

매우 익숙한 메소드다. 이 메소드는 컴포넌트의 모양새를 정의한다. 그래서 컴포넌트에서 가장 중요한 메소드이다. 그런만큼 라이프사이클 메소드중 유일한 '필수' 메소드다.

이 메소드 안에서 this.props와 this.state에 접근할 수 있으며, 리액트 요소를 반환한다. 여기서 말하는 요소는 div같은 태그가 될 수도 있고, 따로 선언, 제작한 컴포넌트가 될 수도 있다. 아무것도 보여주고 싶지 않다면 null이나 false값을 반환하면 된다.

이 메소드를 사용하기 위한 중요한 사항이 있다.
1. render() 안에서는 이벤트 설정이 아닌 곳에서 setState를 사용하면 안 된다.
2. 브라우저의 DOM에 접근하면 안된다.
3. DOM 정보를 가져오거나 state에 변화를 줄 때는 componentDidMount 메소드를 통해 처리해야한다.

#### (2) constructor 메소드

	constructor(props){
		super(props)
	}

이 메소드는 컴포넌트의 생성자로 컴포넌트를 만들 때 처음으로 실행된다. 이 메소드에서 초기 state를 설정할 수 있다.
우리가 컴포넌트를 만들게 되면서, Component 를 상속했으며, 우리가 이렇게 constructor 를 작성하게 되면 기존의 클래스 생성자를 덮어쓰게 된다. 그렇기에, 리액트 컴포넌트가 지니고있던 생성자를 super 를 통하여 미리 실행하고, 그 다음에 우리가 할 작업 (state 설정) 을 해주는 것이다.

#### (3) getDerivedStateFromProps 메소드

props로 받아온 값을 state에 동기화시키는 용도로 사용한다. 컴포넌트가 마운트될 때와 업데이트될 때 호출된다.
참고로 이 메소드는 리액트 v16.3 이후에 새로 만들어져 그 이전의 리액트에서는 사용할 수 없다.

	static getDerivedStateFromProps(nextProps, prevState){
		if(nextProps.value !== prevState.value) {
			return {value : nextProps.value}
		}
		return null
	}
	
여기서 props 와 state 의 차이를 짚고 가자면...

props 는 부모 컴포넌트가 자식 컴포넌트에게 주는 값이다. 자식 컴포넌트에서는 props 를 받아오기만하고, 받아온 props 를 직접 수정 할 수 없다. 반면에 state 는 컴포넌트 내부에서 선언하며 내부에서 값을 변경 할 수 있다.

#### componentDidMount 메소드
	componentDidMount() {...}
	
이 메소드는 컴포넌트를 만들고, 첫 랜더링이 끝난 뒤에 실행한다. 이 안에서 다른 자바스크립트 라이브러리 or 프레임워크 함수를 호출하거나 이벤트 등록, setTimeout, setInterval, 네트워크 요청같은 비동기 작업을 처리하면 된다.

#### shouldComponentUpdate 메소드
	shouldComponentUpdate(nextProps, nextState) {...}
이것은 props or state를 변경했을때, 리렌더링을 시작할지 여부를 지정하는 메소드이다. 이 메소드에서는 반드시 true or false를 반환해야 한다. 컴포넌트를 만들 때 이 메소드를 따로 생성하지 않으면 기본적으로 언제나 true값을 반환한다. 이 메소드가 false값을 반환한다면 업데이트 과정은 여기서 중지된다.

이 메소드 안에서 현재 props와 state는 this.props와 this.state로 접근하고, 새로 설정될 props 또는 state는 nextProps와 nextState로 접근할 수 있다.

프로젝트 성능을 최적화할 때, 상황에 맞는 알고리즘을 작성하여 리렌더링을 방지할 때는 false값을 반환하게 한다. 

#### getSnapshopBeforeUpdate 메소드
이 메소드는 render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출된다. 이 메소드에서 반환하는 값은 componentDidUpdate에서 세번째 파라미터인 snapshot 값으로 전달 받을 수 있다. 주로 업데이트 하기 직전의 값을 참고할 일이 있을 때 활용한다. 예를 들면 스크롤바 위치 유지 같은 것 말이다.
이 메소드는 리액트 16.3 이후 만들어졌다.

	getSnapshopBeforeUpdate(preProps, prevState) {
		if(preProps.array !== this.state.array){
			const {scrollTop, scrollHeight} = this.list
			return {scrollTop, scrollHeight}
		}
	}
	
#### componentDidUpdate

	componentDidUpdate(prevProps, prevState, snapshot) {...}
	
이것은 리렌더링을 완료한 후 실행한다. 업데이트가 끝난 직후이기 때문에 DOM 관련 처리를 해도 무방하다. 여기서는 prevProps or prevState를 사용하여 컴포넌트가 이전에 가졌던 데이터에 접근할 수 있다. 또 getSnapshotBeforeUpdate에서 반환한 값이 있다면 여기서 snapshot값을 전달받을 수 있다.

#### componentWillUnmount 메소드
	componentWillUnmount() {...}
이것은 컴포넌트를 DOM에서 제거할 때 실행한다. componentDidMount에서 등록한 이벤트, 타이머, 직접 생성한 DOM이 있다면 여기서 제거 작업을 해야 한다.

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

