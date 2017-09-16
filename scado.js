import { combineReducers } from 'redux';
import themeReducer from './components/Theme/reducer';
import animationReducer from './components/Animation/reducer';
import toastReducer from './components/ToastContainer/reducer';

// Components

export { default as Theme } from './components/Theme';
export { default as Animation } from './components/Animation';
export { default as Icon } from './components/Icon';
export { default as Flex } from './components/Flex';
export { default as ToastContainer } from './components/ToastContainer';
export { default as IconButton } from './components/IconButton';
export * from './components/Grid';

// Actions

export { default as themeActions } from './components/Theme/actions';
export { default as animationActions } from './components/Animation/actions';
export { default as toastActions } from './components/ToastContainer/actions';

// Selectors

export { default as defaultTheme } from './components/Theme/initialState';

// Reducers

export const scadoReducers = combineReducers({
    theme: themeReducer,
    animations: animationReducer,
    toasts: toastReducer,
});
