import reducer from './reducer';
import initialState from './initialState';
import { SHOW_TOAST, DISMISS_TOAST } from './actionTypes';

const toast = { type: 'success', content: 'text', dismissTimeout: 3000 };

it('should return the initial state of the reducer', () => {
    const newState = reducer(undefined, {});
    expect(newState).toEqual(initialState);
});

it('should update the state correctly on the \'showToast\' action', () => {
    const newState = reducer(initialState, { type: SHOW_TOAST, payload: toast });
    expect(newState.length).toEqual(1);
    const toastId = newState[0].id;
    const newState2 = reducer(newState, { type: DISMISS_TOAST, payload: toastId });
    expect(newState2.length).toEqual(0);
});
