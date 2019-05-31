import { SIGN_IN, SIGN_OUT } from './constants';

export const signIn = userId => {
    return {
        type: SIGN_IN,
        payload: {
            isSignedIn: true,
            userId,
        },
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT,
        payload: {
            isSignedIn: false,
        },
    };
};
