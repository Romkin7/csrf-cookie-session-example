import { combineReducers } from 'redux';
import productReducer from './productReducer';
import loggedInUserReducer from './loggedInUserReducer';
import flashMessageReducer from './flashMessageReducer';

const rootReducer = combineReducers({
    flashMessage: flashMessageReducer,
    loggedInUser: loggedInUserReducer,
    products: productReducer,
});

export default rootReducer;
