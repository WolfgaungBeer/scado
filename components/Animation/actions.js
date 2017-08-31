import { ANIMATE, REMOVE } from './actionTypes';

export const animate = (payload) => {
    return { type: ANIMATE, payload };
};

export const remove = (payload) => {
    return { type: REMOVE, payload };
};
