import uuid from 'uuid/v4';
import { SHOW_TOAST, DISMISS_TOAST } from './actionTypes';
import animationActions from '../Animation/actions';

const showToastAction = payload => ({ type: SHOW_TOAST, payload });

const dismissToastAction = payload => ({ type: DISMISS_TOAST, payload });

const showToast = _payload => (dispatch) => {
    const id = uuid();
    const payload = { ..._payload, id };
    dispatch(animationActions.animate({ id, type: 'enter', className: 'vivify flipInX' }));
    dispatch(showToastAction(payload));
};

const dismissToast = payload => (dispatch) => {
    dispatch(animationActions.animate({ id: payload, type: 'leave', className: 'vivify flipOutX' }));
    setTimeout(() => {
        dispatch(animationActions.remove(payload));
        dispatch(dismissToastAction(payload));
    }, 850);
};

export default { showToast, dismissToast };
