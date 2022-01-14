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
      return {...state, users: [...(state?.users ?? []), action?.user]};
    }
    case Action.EDIT_USER: {
      const updateIndex = state?.users.findIndex(
        user => user?.id === action?.id,
      );
      state.users[updateIndex] = action?.user;
      return {
        ...state,
        users: [...state.users],
      };
    }
    case Action.DELETE_USER: {
      return {
        ...state,
        users: state?.users.filter(item => item.id !== action?.id),
      };
    }
    default:
      return state;
  }
};
