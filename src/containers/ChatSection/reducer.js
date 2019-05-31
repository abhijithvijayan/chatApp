import { SEND_MESSAGE } from './constants';

const INITIAL_STATE = {
    messages: {},
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                messages: {
                    ...state.messages,
                    [action.payload.messageBody.when + action.payload.messageBody.who.uid]: action.payload.messageBody,
                },
            };
        }
        default:
            return state;
    }
};
