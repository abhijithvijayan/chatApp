import { SEND_MESSAGE } from './constants';

export const sendMessage = (sender, message) => {
    return {
        type: SEND_MESSAGE,
        payload: {
            sender,
            message,
        },
    };
};
