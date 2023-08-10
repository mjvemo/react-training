import { ActionType } from "./actionType";
import { v4 as uuid } from "uuid";

export function addTask(task /*{description: string, isCompleted?: boolean}*/) {
  return {
    type: ActionType.ADD_TASK,
    payload: {
      id: uuid(),
      isCompleted: false,
      ...task,
    },
  };
}

export function editTask(id, task) {
  return {
    type: ActionType.EDIT_TASK,
    payload: {
      id,
      ...task,
    },
  };
}

export function deleteTask(id) {
  return {
    type: ActionType.DELETE_TASK,
    payload: {
      id,
    },
  };
}

export function toggleTask(id) {
  return {
    type: ActionType.TOGGLE_TASK,
    payload: {
      id,
    },
  };
}

export function allCompletedTask() {
  return {
    type: ActionType.ALLCOMPLETED_TASK,
  };
}

export function allPendingTask() {
  return {
    type: ActionType.ALLPENDING_TASK,
  };
}

export function deleteAll() {
  return {
    type: ActionType.DELETEALL,
  };
}
