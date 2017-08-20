import * as types from './actionTypes';

export const animate = (payload) => {
    return { type: types.ANIMATE, payload };
};

export const setClassName = (payload) => {
    return { type: types.SET_CLASSNAME, payload };
};
