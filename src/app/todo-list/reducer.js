import { ActionType } from "./actionType";

// { type: ActionType.ADD_TASK, payload: {id: "", task: "", isCompleted: false} }

function addTaskReducer(state, action) {
  return {
    ...state,
    tasks: [...state.tasks, action.payload],
  };
}

// {tasks: [{ id: ...}]}
// { type: ActionType.EDIT_TASK, payload: {id: ""} }

// {tasks: [{ id: ...}, { id: ...}, ""]}

function editTaskReducer(state, action) {
  // reducer if id === action.id, then we update the item
  // map if id === action.id, then we update the item => returns a new array (immutability)

  // [].findIndex(item => item.id === id) => 1 : -1
  // state.tasks[1] = action.payload; // side effect state

  return {
    ...state,
    tasks: [
      ...state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task, // {id: '', task: 'Sleep', isCompleted: false}
            ...action.payload, // {id: '', task: 'Go to the gym'}
          }; // {id: '', task: 'Go to the gym', isCompleted: false}
        }
        return task;
      }),
    ],
  };
}

function deleteTaskReducer(state, action) {
  return {
    ...state,
    tasks: state.tasks.filter((task) => {
      return task.id !== action.payload.id;
    }),
  };
}

function toggleTaskReducer(state, action) {
  return {
    ...state,
    tasks: state.tasks.map((task) => {
      return task.id === action.payload.id
        ? { ...task, isCompleted: !task.isCompleted } // task: {id: '--', isCompleted: false } => {...task, }
        : task; // {...task, isCompleted: !task.isCompleted } => {id: '--', isCompleted: true }
    }),
  };
}

function allCompletedTaskReducer(state) {
  return {
    ...state,
    tasks: state.tasks.map((task) => {
      return { ...task, isCompleted: true };
    }),
  };
}

function allPendingTaskReducer(state) {
  return {
    ...state,
    tasks: state.tasks.map((task) => {
      return {
        ...task,
        isCompleted: false,
      };
    }),
  };
}

function deleteAll(state) {
  return {
    ...state,
    tasks: [],
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case ActionType.ADD_TASK:
      return addTaskReducer(state, action);
    case ActionType.EDIT_TASK:
      return editTaskReducer(state, action);
    case ActionType.DELETE_TASK:
      return deleteTaskReducer(state, action);
    case ActionType.TOGGLE_TASK:
      return toggleTaskReducer(state, action);
    case ActionType.ALLCOMPLETED_TASK:
      return allCompletedTaskReducer(state);
    case ActionType.ALLPENDING_TASK:
      return allPendingTaskReducer(state);
    case ActionType.DELETEALL:
      return deleteAll(state);
    default:
      return state;
  }
}
