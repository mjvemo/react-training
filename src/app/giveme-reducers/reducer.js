import { actionType } from "./action-type";

function addMember(state, action) {
  return {
    ...state,
    members: [...state.members, action.payload],
  };
}

function deleteMember(state, action) {
  const members = state.members.filter((member) => {
    return member.id !== action.payload.id;
  });
  return {
    ...state,
    members,
  };
}

// const handlerMapper = {
//   [actionType.ADD_MEMBER]: addMember,
//   [actionType.DELETE_MEMBER]: deleteMember,
// };

export function reducer(state, action) {
  // const handler = handlerMapper[action.type];
  // return handler ? handler(state, action) : state;

  switch (action.type) {
    case actionType.ADD_MEMBER:
      return addMember(state, action);

    case actionType.DELETE_MEMBER:
      return deleteMember(state, action);
    default:
      return state;
  }
}
