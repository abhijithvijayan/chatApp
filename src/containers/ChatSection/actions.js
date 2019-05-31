import { FETCH_MESSAGES } from './constants';
import { chatRef } from '../../utils/firebase';

export const sendMessage = messageBody => {
    console.log(messageBody);
    return async dispatch => {
        chatRef.push().set(messageBody);
    };
};

export const fetchMessages = () => {
    return async dispatch => {
        chatRef.on('value', snapshot => {
            dispatch({
                type: FETCH_MESSAGES,
                payload: snapshot.val(),
            });
        });
    };
};
