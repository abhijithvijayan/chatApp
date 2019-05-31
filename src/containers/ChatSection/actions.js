import { SEND_MESSAGE } from './constants';

export const sendMessage = messageBody => {
    return {
        type: SEND_MESSAGE,
        payload: {
            messageBody,
        },
    };
};
