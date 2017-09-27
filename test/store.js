import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { scadoReducers } from '../scado';


const reducers = combineReducers({
    scado: scadoReducers,
    form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

const middlewares = composeEnhancers(applyMiddleware(thunk));


const store = createStore(reducers, middlewares);
export default store;
