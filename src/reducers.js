/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import chatReducer from './containers/ChatSection/reducer';
import globalReducer from './containers/App/reducer';

export default combineReducers({
    app: globalReducer,
    chat: chatReducer,
    form: reduxFormReducer,
});
