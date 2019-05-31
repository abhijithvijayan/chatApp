/**
 *
 * Global Reducer
 *
 */

import { SIGN_IN, SIGN_OUT } from '../ChatSection/constants';

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null,
};

const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN: {
            return { ...state, isSignedIn: true, userId: action.payload.userId };
        }
        case SIGN_OUT: {
            return { ...state, isSignedIn: false, userId: null };
        }
        default:
            return { ...state };
    }
};

export default appReducer;
