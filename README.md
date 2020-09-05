# 이 브랜치는 React JS 공부를 위한 브랜치다.



### 목차
1. Hooks 사용 방법

 
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


