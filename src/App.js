import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Info from './Hooks/useState/info';
import Say from './Hooks/useState/Say';
import CounterTwo from './Hooks/useState/CounterTwo';
import Counter from './Hooks/useState/Counter';
import Average from './Hooks/useCallback/Average';
import Event from './Event/EventPractice';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                               

                <Switch>
                    <Route path="/" component={Average} exact={true} />
                    <Route path="/info/:name" component={Info} />
                    <Route path="/say" component={Say} />
                    <Route path="/counter" component={Counter} />
                    <Route path="/counterTwo" component={CounterTwo} />
                    <Route path="/event" component={Event} />

                    <Route
                        render={({ location }) => (
                            // <div>
                            //     error 404 <p>{location.pathname}</p>
                            // </div>
							<a href="http://www.naver.com">Go NAVER</a>
                        )}
                    />
                </Switch>
            </div>
        );
    }
}
export default App;