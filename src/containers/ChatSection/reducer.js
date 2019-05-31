import { SEND_MESSAGE } from './constants';

const INITIAL_STATE = {
    messages: {},
    sender: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return { ...state, message: action.payload.message, sender: action.payload.sender };
        }
        default:
            return state;
    }
};
