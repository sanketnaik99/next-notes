const INCREMENT = "next-notes/counter/INCREMENT";
const DECREMENT = "next-notes/counter/DECREMENT";

interface Action {
  type: string;
}

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

const reducer = (
  state: CounterState = initialState,
  action: Action = { type: "" }
) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export const increment = () => {
  return { type: INCREMENT };
};

export const decrement = () => {
  return { type: DECREMENT };
};

export default reducer;
