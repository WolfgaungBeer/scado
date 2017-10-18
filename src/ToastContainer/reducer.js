import v4 from 'uuid/v4';
import { SHOW_TOAST, DISMISS_TOAST } from './actionTypes';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case SHOW_TOAST: {
        const newState = [...state];
        newState.push({ ...action.payload, id: v4() });
        return newState;
    }
    case DISMISS_TOAST: {
        const newState = state.filter(t => t.id !== action.payload);
        return newState;
    }
    default: {
        return state;
    }
    }
};

export default reducer;
