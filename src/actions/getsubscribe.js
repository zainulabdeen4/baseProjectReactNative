// @flow

import { GET_SUBSCRIPTION } from './ActionTypes';

export function request(payload: Object) {
  return {
    type: GET_SUBSCRIPTION.REQUEST,
    payload,
  };
}

export function success(data: Object) {
  return {
    data,
    type: GET_SUBSCRIPTION.SUCCESS,
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: GET_SUBSCRIPTION.FAILURE,
  };
}
