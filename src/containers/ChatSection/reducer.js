import { FETCH_MESSAGES } from './constants';

const INITIAL_STATE = {
    messages: {},
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_MESSAGES: {
            return {
                ...state,
                messages: action.payload,
            };
        }
        default:
            return state;
    }
};
