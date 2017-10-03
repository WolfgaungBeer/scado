import { SHOW_TOAST, DISMISS_TOAST } from './actionTypes';

export const showToast = payload => ({ type: SHOW_TOAST, payload });
export const dismissToast = payload => ({ type: DISMISS_TOAST, payload });

export default { showToast, dismissToast };
