import { ANIMATE, REMOVE } from './actionTypes';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case ANIMATE: {
        const newState = { ...state };
        const { id, type, className } = action.payload;
        newState[id] = { type, className };
        return newState;
    }
    case REMOVE: {
        const newState = { ...state };
        const id = action.payload;
        delete newState[id];
        return newState;
    }
    default: {
        return state;
    }
    }
};

export default reducer;
