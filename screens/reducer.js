const initialState = {count: 0};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'increment': {
      return {...state, count: state.count + 1};
    }
    case 'decrement': {
      return {...state, count: state.count - 1};
    }
    default: {
      return state;
    }
  }
}
