import {combineReducers, createStore} from 'redux';
import {countReducer, userReducer} from '../reducers/countReducer';

const rootReducer = combineReducers({users: userReducer, count: countReducer});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
