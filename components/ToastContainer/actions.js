import uuid from 'uuid/v4';
import * as types from './actionTypes';

export const showToast = (_payload) => {
    const payload = { ..._payload, id: uuid() };
    return { type: types.SHOW_TOAST, payload };
};

export const dismissToast = (payload) => {
    return { type: types.DISMISS_TOAST, payload };
};
