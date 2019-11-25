// @flow

import { GET_NUTRITION } from "./ActionTypes";

export function request(payload:Object) {
  return {
    type: GET_NUTRITION.REQUEST,
    payload
  };
}

export function success(data: Object) {
  return {
    data,
    type: GET_NUTRITION.SUCCESS
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: GET_NUTRITION.FAILURE
  };
}
