import { combineReducers } from 'redux';
import themeReducer from './Theme/reducer';
import toastReducer from './ToastContainer/reducer';

// Components

export { default as Theme } from './Theme';
export { default as Text } from './Text';
export { default as Icon } from './Icon';
export { default as Flex } from './Flex';
export { default as ToastContainer } from './ToastContainer';
export { default as Button } from './Button';
export { default as ToolBar } from './ToolBar';
export * from './FormComponents';
export * from './Grid';

// Actions

export { default as themeActions } from './Theme/actions';
export { default as toastActions } from './ToastContainer/actions';

// Selectors

export { default as defaultTheme } from './Theme/initialState';

// Reducers

export const scadoReducers = combineReducers({
    theme: themeReducer,
    toasts: toastReducer,
});
