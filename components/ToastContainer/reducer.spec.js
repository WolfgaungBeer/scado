import reducer from './reducer';
import initialState from './initialState';
import { SHOW_TOAST, DISMISS_TOAST } from './actionTypes';

const toast = { id: 'test', type: 'success', component: 'text', dismissTimeout: 3000 };

it('should return the initial state of the reducer', () => {
    const newState = reducer(undefined, {});
    expect(newState).toEqual(initialState);
});

it('should update the state correctly on the \'showToast\' action', () => {
    const newState = reducer(initialState, { type: SHOW_TOAST, payload: toast });
    const expectedState = [...initialState];
    expectedState.push(toast);
    expect(newState).toEqual(expectedState);
});

it('should update the state correctly on the \'dismissToast\' action', () => {
    const initState = [...initialState];
    initState.push(toast);
    const newState = reducer(initState, { type: DISMISS_TOAST, payload: toast.id });
    expect(newState).toEqual(initialState);
});
