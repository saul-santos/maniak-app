import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Testimonial } from './components';

function App() {
    document.body.style = 'background-color: var(--main-bg-color)';

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/testimonial">
                    <Testimonial />
                </Route>
                <Route path="/page2">
                    Page 2
                </Route>
                <Route path="/">
                    Home
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
