// @flow

import { GET_RESULT } from "./ActionTypes";

export function request(payload:Object) {
  return {
    type: GET_RESULT.REQUEST,
    payload
  };
}

export function success(data: Object) {
  return {
    data,
    type: GET_RESULT.SUCCESS
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: GET_RESULT.FAILURE
  };
}
