import { SHOW_TOAST, DISMISS_TOAST } from './actionTypes';

const defaultState = [];

const reducer = (state = defaultState, action) => {
    switch (action.type) {
    case SHOW_TOAST: {
        const newState = [...state];
        newState.push(action.payload);
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
