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
                    Home under construction... please visit Testimonials or Calculator
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
