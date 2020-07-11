import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from './components';
import { Calculator, Testimonials } from "./containers";
import './App.css';

function App() {
    document.body.style = 'background-color: var(--main-bg-color)';

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/testimonials">
                    <Testimonials />
                </Route>
                <Route path="/calculator">
                    <Calculator />
            </Route>
                <Route path="/">
                    Under construction... please visit testimonials or calculator
            </Route>
            </Switch>
        </Router>
    );
}

export default App;
