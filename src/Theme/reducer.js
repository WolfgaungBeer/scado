import initialState from './initialState';
import { SET_THEME } from './actionTypes';

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_THEME: {
        return { ...action.payload };
    }
    default: {
        return state;
    }
    }
};

export default reducer;
