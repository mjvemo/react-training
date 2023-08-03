import { v4 as uuid } from "uuid";
import { actionType } from "./actionType";

export function addReducer(name) {
  return {
    type: actionType.ADD_REDUCER,
    payload: { id: uuid(), name },
  };
}

export function deleteReducer(id) {
  return {
    type: actionType.DELETE_REDUCER,
    payload: { id },
  };
}

export function increaseFn(count) {
  return {
    type: actionType.INCREASE,
    payload: { count },
  };
}

export function decreaseFn(count) {
  return {
    type: actionType.INCREASE,
    payload: { count },
  };
}
