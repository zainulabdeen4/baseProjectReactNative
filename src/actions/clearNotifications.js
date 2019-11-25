// @flow

import { CLEARNOTIFICATIONS } from './ActionTypes';

export function request(payload: Object) {
  return {
    type: CLEARNOTIFICATIONS.REQUEST,
    payload,
  };
}

export function success(data: Object) {
  return {
    data,
    type: CLEARNOTIFICATIONS.SUCCESS,
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: CLEARNOTIFICATIONS.FAILURE,
  };
}
