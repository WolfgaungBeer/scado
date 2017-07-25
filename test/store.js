import { combineReducers, createStore } from 'redux';
import { themeReducer } from '../scado';


const reducers = combineReducers({
    themeReducer
});


const store = createStore(reducers);
export default store;
