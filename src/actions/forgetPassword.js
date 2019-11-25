// @flow

import { FORGET_PASSWORD } from "./ActionTypes";

export function request(payload:Object) {
  return {
    type: FORGET_PASSWORD.REQUEST,
    payload
  };
}

export function success(data: Object) {
  return {
    data,
    type: FORGET_PASSWORD.SUCCESS
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: FORGET_PASSWORD.FAILURE
  };
}
