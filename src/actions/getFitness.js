// @flow

import { GET_FITNESS } from "./ActionTypes";

export function request(payload:Object) {
  return {
    type: GET_FITNESS.REQUEST,
    payload
  };
}

export function success(data: Object) {
  return {
    data,
    type: GET_FITNESS.SUCCESS
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: GET_FITNESS.FAILURE
  };
}
