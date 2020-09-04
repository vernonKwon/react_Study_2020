import React, { Component } from 'react';
import Counter from './Counter';
// import Say from './Say'
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
				{React.version}
				
            </div>
        );
    }
}
export default App;