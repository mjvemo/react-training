import { action_type } from "./action_type";
import { v4 as uuid } from "uuid";

export function addMember(dispatch, name) {
  dispatch({
    type: action_type.ADD_MEMBER,
    payload: { id: uuid(), name },
  });
}

export function editMember(dispatch, id, member) {
  dispatch({
    type: action_type.EDIT_MEMBER,
    payload: { id, member },
  });
}

export function deleteMember(dispatch, id) {
  dispatch({
    type: action_type.DELETE_MEMBER,
    payload: { id },
  });
}
