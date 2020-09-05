# 이 브랜치는 React JS 공부를 위한 브랜치다.



[1.Hooks 사용 방법]
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

---


