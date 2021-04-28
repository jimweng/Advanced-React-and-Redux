import { combineReducers } from 'redux';
import commentsReducers from 'reducers/comments';
import authReducer from 'reducers/auth';

export default combineReducers({
    comments: commentsReducers ,
    auth: authReducer
});