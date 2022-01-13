import * as Action from '../constants';

const initialState = {
  count: 0,
};
const userInitialState = {
  users: [],
};
export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.COUNTER_INCREMENT: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case Action.COUNTER_DECREMENT: {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    default:
      return state;
  }
};

export const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case Action.CREATE_USER: {
      return {...state, users: action.user};
    }
    case Action.EDIT_USER: {
      return state.map(user => {
        if (user.id === action.id) {
          return {...state, users: action.user};
        }
      });
    }
    case Action.DELETE_USER: {
      return {
        ...state,
        users: state.users.filter((item, index) => index !== action.id),
      };
    }
    default:
      return state;
  }
};
