import * as types from './actionTypes';

export const setTheme = (payload) => {
    return {
        type: types.SET_THEME,
        payload: payload
    };
};
