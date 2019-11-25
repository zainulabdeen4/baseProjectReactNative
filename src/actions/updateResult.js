// @flow

import { UPDATE_RESULT } from './ActionTypes';

export function request(payload: Object) {
  return {
    type: UPDATE_RESULT.REQUEST,
    payload,
  };
}

export function success(data: Object) {
  return {
    data,
    type: UPDATE_RESULT.SUCCESS,
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: UPDATE_RESULT.FAILURE,
  };
}
