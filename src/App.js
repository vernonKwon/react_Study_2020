import React, { Component } from 'react';
import Counter from './Counter';
import Say from './Hooks/Say';
import EventPractice from './Event/EventPractice';
import ValidityState from './Dom_name/ValidationSample'
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

				
				<Counter/>
				
				<Say/>
				
				<EventPractice/>
				
				--------------------------
				
				<ValidityState/>
				
				 </div>
				/*<ScrollBox ref = {(ref) => {this.ScrollBox = ref}}/> -->
				<button onclick = {()=>{this.scrollBox.ScrollToBottom()}}>맨 밑으로</button> */
				
				/* 스크롤바 문제 못풀겠다. 왜 작동 안되는지 모르겠음*/
					
					
				
           
        );
    }
}
export default App;

