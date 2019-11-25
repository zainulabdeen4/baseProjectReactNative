// @flow

import { GET_PLANNER_EVENT_LIST } from "./ActionTypes";

export function request(payload:Object) {
  return {
    type: GET_PLANNER_EVENT_LIST.REQUEST,
    payload
  };
}

export function success(data: Object) {
  return {
    data,
    type: GET_PLANNER_EVENT_LIST.SUCCESS
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: GET_PLANNER_EVENT_LIST.FAILURE
  };
}
