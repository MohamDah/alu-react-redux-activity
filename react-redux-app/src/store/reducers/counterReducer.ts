import { INCREMENT, DECREMENT, RESET } from "../actions/counterActions";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterReducer = (
  state = initialState,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: any,
): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    case RESET:
      return { value: 0 };
    default:
      return state;
  }
};
