// @flow

import { SIGNUP } from './ActionTypes';

export function request(payload) {
  return {
    type: SIGNUP.REQUEST,
    value: payload,
  };
}

export function success(data: Object) {
  return {
    data,
    type: SIGNUP.SUCCESS,
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: SIGNUP.FAILURE,
  };
}
