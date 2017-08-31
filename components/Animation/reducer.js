import * as types from './actionTypes';

const defaultState = {
    animations: {}
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.ANIMATE: {

            const animations = { ...state.animations };
            const { id, type, className } = action.payload;
            animations[id] = { type, className };
            return { ...state, animations };

        }
        case types.REMOVE: {

            const animations = { ...state.animations };
            const id = action.payload;
            delete animations[id];
            return { ...state, animations };

        }
        default: {

            return state;

        }
    }
}

export default reducer;
