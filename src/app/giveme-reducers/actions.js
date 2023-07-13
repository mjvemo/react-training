import { v4 as uuid } from "uuid";
import { actionType } from "./action-type";

export function addMember(name) {
  return {
    type: actionType.ADD_MEMBER,
    payload: { id: uuid(), name },
  };
}

export function deleteMember(id) {
  return {
    type: actionType.DELETE_MEMBER,
    payload: { id },
  };
}
