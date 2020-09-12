import React, { Component } from 'react';
import Info from './Hooks/costomHook/info';
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
                <Info />
            </div>
        );
    }
}
export default App;