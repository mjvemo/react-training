import { actionType } from "./actionType";
function addReducer(state, action) {
  return {
    ...state,
    people: [...state.people, action.payload],
  };
}

function deleteReducer(state, action) {
  const people = state.people.filter((person) => {
    return person.id !== action.payload.id;
  });
  return {
    ...state,
    people,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case actionType.ADD_REDUCER:
      return addReducer(state, action);

    case actionType.DELETE_REDUCER:
      return deleteReducer(state, action);
  }
}
