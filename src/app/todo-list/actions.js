import { v4 as uuid } from "uuid";

export function addTask(dispatch, description) {
  dispatch({
    type: "addTask",
    payload: {
      id: uuid(),
      description,
      done: false,
    },
  });
}

export function deleteTask(dispatch, id) {
  dispatch({
    type: "deleteTask",
    payload: { id },
  });
}

export function setTaskDoneValue(dispatch, id, done) {
  dispatch({
    type: "setTaskDoneValue",
    payload: {
      id,
      done,
    },
  });
}

export function resetTasks(dispatch) {
  dispatch({
    type: "resetTasks",
  });
}
