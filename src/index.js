import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import reducer from './reducers'
import mySaga from "./sagas";
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(mySaga);

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);
