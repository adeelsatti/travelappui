import {COUNTER_DECREMENT, COUNTER_INCREMENT, DELETE_USER} from '../constants';

export const increment = () => {
  return {
    type: COUNTER_INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: COUNTER_DECREMENT,
  };
};

export const deleteUser = id => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};
