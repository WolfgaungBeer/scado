import theme from './defaultTheme';
import * as types from './actionTypes';

const defaultState = { theme };

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.SET_THEME: {

            return { ...state, theme: { ...action.payload } };

        }
        default: {

            return state;

        }
    }
}

export default reducer;
