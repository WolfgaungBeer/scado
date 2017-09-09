import * as types from './actionTypes';

const defaultState = {};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.ANIMATE: {

            const newState = { ...state };
            const { id, type, className } = action.payload;
            newState[id] = { type, className };
            return newState;

        }
        case types.REMOVE: {

            const newState = { ...state };
            const id = action.payload;
            delete newState[id];
            return newState;

        }
        default: {

            return state;

        }
    }
}

export default reducer;
