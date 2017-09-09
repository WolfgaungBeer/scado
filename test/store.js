import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { scadoReducers } from '../scado';


const reducers = combineReducers({
    scado: scadoReducers
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = composeEnhancers(applyMiddleware(thunk));


const store = createStore(reducers, middlewares);
export default store;
