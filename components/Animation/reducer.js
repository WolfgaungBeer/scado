import * as types from './actionTypes';

const defaultState = {
    animations: {}
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.ANIMATE: {

            const animations = { ...state.animations };
            const { id } = action.payload;
            animations[id] = { ...action.payload };
            return { ...state, animations };

        }
        case types.SET_CLASSNAME: {

            const animations = { ...state.animations };
            const { id } = action.payload;
            animations[id] = { ...action.payload };
            return { ...state, animations };

        }
        default: {

            return state;

        }
    }
}

export default reducer;
