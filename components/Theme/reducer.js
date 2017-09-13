import theme from './defaultTheme';
import { SET_THEME } from './actionTypes';

const reducer = (state = theme, action) => {
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
