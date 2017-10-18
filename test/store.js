import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { scadoReducers } from '../src/scado';


const reducers = combineReducers({
    scado: scadoReducers,
    form: formReducer,
});


const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // eslint-disable-line
export default store;
