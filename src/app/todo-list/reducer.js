export default function reducer(state, action) {
  // action.type : string
  // action.payload : any

  console.log(action);

  switch (action.type) {
    case "addTask":
      // payload = task ({ id: string, description: string, done: boolean})
      return [...state, action.payload];
    case "setTaskDoneValue":
      return [
        ...state.map((task) => {
          if (action.payload.id === task.id) {
            return {
              ...task,
              done: action.payload.done,
            };
          }

          return task;
        }),
      ];
    case "deleteTask":
      // payload => {id : string}
      return [...state.filter((t) => t.id !== action.payload.id)];
    case "resetTasks":
      return [];
    default:
      return state;
  }
}
