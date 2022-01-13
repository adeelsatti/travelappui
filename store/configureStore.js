import {combineReducers, createStore} from 'redux';
import {countReducer, userReducer} from '../reducers/countReducer';

const rootReducer = combineReducers(
  {count: countReducer},
  {users: userReducer},
);

const configureStore = () => {
  return createStore(userReducer);
};

export default configureStore;
