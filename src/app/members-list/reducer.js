import { action_type } from "./action_type";

function addMember(state, action) {
  return {
    ...state,
    members: [...state, action.payload],
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case action_type.ADD_MEMBER:
      return addMember(state, action);
  }
}
