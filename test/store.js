import { combineReducers, createStore } from 'redux';
import { themeReducer, animationReducer } from '../scado';


const reducers = combineReducers({
    themeReducer,
    animationReducer,
});


const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
