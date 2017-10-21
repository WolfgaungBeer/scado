import { combineReducers } from 'redux';
import themeReducer from './Theme/reducer';
import toastReducer from './ToastContainer/reducer';

// Components

export { default as Button } from './Button';
export { default as Flex } from './Flex';
export { default as Grid } from './Grid';
export { default as Icon } from './Icon';
export { default as InputField } from './InputField';
export { default as Panel } from './Panel';
export { default as Spacing } from './Spacing';
export { default as Text } from './Text';
export { default as Theme } from './Theme';
export { default as ToastContainer } from './ToastContainer';
export { default as ToolBar } from './ToolBar';

// Actions

export { default as themeActions } from './Theme/actions';
export { default as toastActions } from './ToastContainer/actions';

// Selectors

export { default as defaultFieldPropTypes } from './defaultFieldPropTypes';
export { default as fieldPropTypes } from './fieldPropTypes';
export { default as defaultTheme } from './Theme/initialState';

// Reducers

export const reducer = combineReducers({
    theme: themeReducer,
    toasts: toastReducer,
});
