import React, { Component } from 'react';
//import Counter from './Hooks/Counter';
//import Say from './Hooks/Say';
//import EventPractice from './Event/EventPractice';
//import ValidityState from './Dom_name/ValidationSample';
//import IterationSample from './Repeat_component/IterationSample';
//import LifeCycleSample from './LifeCycle/LifeCycleSample';
//import ErrorBoundary from './LifeCycle/ErrorBoundary'
//import CounterTwo from './Hooks/CounterTwo'
//import Info from './Hooks/info'
//import Info from './Hooks/useEffect'
// import Counter from './Hooks/useReducer/Counter'
import Info from './Hooks/useReducer/Info'

// import ScrollBox from './Dom_name/ScrollBox'
// import logo from './logo.svg';
import './App.css';


class App extends Component {
        
    render() {
        return (
            <div className="App">
                <img
                    src="https://img.hankyung.com/photo/201908/BF.20397825.1.jpg"
                    className="App-logo"
                    alt="logo"
                />
                
				
				<Info/>				
				
            </div>

            /*<Counter />
                <Say />
                <EventPractice />
                --------------------------
                <ValidityState />
                <IterationSample />
				
				<ErrorBoundary>
				<LifeCycleSample  color = {this.state.color}/>
				</ErrorBoundary>
                
				
				<CounterTwo/>
				<Info/>
				*/

            /*<ScrollBox ref = {(ref) => {this.ScrollBox = ref}}/> -->
				<button onclick = {()=>{this.scrollBox.ScrollToBottom()}}>맨 밑으로</button> */

            /* 스크롤바 문제 못풀겠다. 왜 작동 안되는지 모르겠음*/
        );
    }
}
export default App;