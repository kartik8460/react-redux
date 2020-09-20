import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import { Provider } from 'react-redux';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const loggerMiddleware = store => {
    return (next) => {
        return (action) => {
            console.log('[MIDDLEWARE] DISPATCHING', action)
            const result = next(action);
            console.log('[MIDDLEWARE] RESULT', result);
            console.log('[MIDDLEWARE] NEXT STATE', store.getState());
            return result;
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
})
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(loggerMiddleware, thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
