import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import Favicon from 'react-favicon';

ReactDOM.render(
    //  <React.StrictMode>
    //    <App />
    //  </React.StrictMode>,
    // document.getElementById('root')
    <BrowserRouter>
		<Favicon url="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSLLCByOxqbvSPV02B_v_5eVKNxvatMFQzJg&usqp=CAU" />
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();