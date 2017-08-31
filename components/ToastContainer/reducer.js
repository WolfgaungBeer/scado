import * as types from './actionTypes';

const defaultState = { toasts: [] };

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.SHOW_TOAST: {

            const toasts = [ ...state.toasts ];
            toasts.push(action.payload);
            return { ...state, toasts };

        }
        case types.DISMISS_TOAST: {

            const toasts = state.toasts.filter(t => t.id !== action.payload);
            return { ...state, toasts };

        }
        default: {

            return state;

        }
    }
}

export default reducer;
