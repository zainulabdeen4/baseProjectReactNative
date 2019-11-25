// @flow

import { ADD_RESULT } from './ActionTypes';

export function request(payload: Object) {
  return {
    type: ADD_RESULT.REQUEST,
    payload,
  };
}

export function success(data: Object) {
  return {
    data,
    type: ADD_RESULT.SUCCESS,
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: ADD_RESULT.FAILURE,
  };
}
