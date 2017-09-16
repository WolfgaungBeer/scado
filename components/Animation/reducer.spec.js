import reducer from './reducer';
import initialState from './initialState';
import actions from './actions';

it('should return the initial state of the reducer', () => {
    const newState = reducer(undefined, {});
    expect(newState).toEqual(initialState);
});

it('should update the state correctly on the \'animate\' action', () => {
    const newState = reducer(initialState, actions.animate({ id: '1', type: 'enter', className: 'test' }));
    const expectedState = { ...initialState, 1: { type: 'enter', className: 'test' } };
    expect(newState).toEqual(expectedState);
});

it('should update the state correctly on the \'remove\' action', () => {
    const newState = reducer(initialState, actions.remove('1'));
    expect(newState).toEqual(initialState);
});
