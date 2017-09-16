import reducer from './reducer';
import initialState from './initialState';
import actions from './actions';


it('should return the initial state of the reducer', () => {
    const newState = reducer(undefined, {});
    expect(newState).toEqual(initialState);
});

it('should update the state correctly on the \'setTheme\' action', () => {
    const newTheme = { ...initialState, color: { ...initialState.color, success: '#00FF00' } };
    const newState = reducer(initialState, actions.setTheme(newTheme));
    expect(newState).toEqual(newTheme);
});
