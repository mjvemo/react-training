import { actionType } from "./actionType";

export function hooksReducer(state, action) {
  switch (action.type) {
    case actionType.INCREASE:
      return { count: state.count + 1 };

    case actionType.DECREASE:
      return { count: state.count - 1 };
    default:
      return state;
  }
}
