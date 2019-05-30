/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import globalReducer from './containers/App/reducer';

export default combineReducers({
    app: globalReducer,
});
