// @flow

import { GET_GOAL } from "./ActionTypes";

export function request(payload:Object) {
  return {
    type: GET_GOAL.REQUEST,
    payload
  };
}

export function success(data: Object) {
  return {
    data,
    type: GET_GOAL.SUCCESS
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: GET_GOAL.FAILURE
  };
}
