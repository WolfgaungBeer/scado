import uuid from 'uuid/v4';
import { SHOW_TOAST, DISMISS_TOAST } from './actionTypes';
import { animate, remove } from '../Animation/actions';

const showToastAction = (payload) => {
    return { type: SHOW_TOAST, payload };
};

const dismissToastAction = (payload) => {
    return { type: DISMISS_TOAST, payload };
};

export const showToast = (_payload) => (dispatch) => {
    const id = uuid();
    const payload = { ..._payload, id };
    dispatch(showToastAction(payload));
    dispatch(animate({ id, type: 'enter', className: 'animated flipInX' }));
}

export const dismissToast = (payload) => (dispatch) => {
    dispatch(animate({ id: payload, type: 'leave', className: 'animated flipOutX' }));
    setTimeout(() => {
        dispatch(remove(payload));
        dispatch(dismissToastAction(payload));
    }, 750);
}
