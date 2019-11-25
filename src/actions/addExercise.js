// @flow

import { ADD_EXERCISE } from "./ActionTypes";

export function request(payload:Object) {
  return {
    type: ADD_EXERCISE.REQUEST,
    payload
  };
}

export function success(data: Object) {
  return {
    data,
    type: ADD_EXERCISE.SUCCESS
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: ADD_EXERCISE.FAILURE
  };
}
