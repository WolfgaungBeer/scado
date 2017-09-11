import types from './actionTypes';

const setTheme = payload => ({
    type: types.SET_THEME,
    payload,
});

export default {
    setTheme,
};
