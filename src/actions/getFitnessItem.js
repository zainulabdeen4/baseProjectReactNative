// @flow

import { GET_FITNESS_ITEM } from "./ActionTypes";

export function request(payload:Object) {
  return {
    type: GET_FITNESS_ITEM.REQUEST,
    payload
  };
}

export function success(data: Object) {
  return {
    data,
    type: GET_FITNESS_ITEM.SUCCESS
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: GET_FITNESS_ITEM.FAILURE
  };
}
