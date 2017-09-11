import theme from './defaultTheme';
import types from './actionTypes';

const reducer = (state = theme, action) => {
    switch (action.type) {
    case types.SET_THEME: {
        return { ...action.payload };
    }
    default: {
        return state;
    }
    }
};

export default reducer;
