import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as scadoReducer } from '../src/scado';


const reducers = combineReducers({
    scado: scadoReducer,
    form: formReducer,
});


const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // eslint-disable-line
export default store;
