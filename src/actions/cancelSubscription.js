// @flow

import { CANCEL_SUBSCRIPTION } from './ActionTypes';

export function request(payload: Object) {
  return {
    type: CANCEL_SUBSCRIPTION.REQUEST,
    payload,
  };
}

export function success(data: Object) {
  return {
    data,
    type: CANCEL_SUBSCRIPTION.SUCCESS,
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: CANCEL_SUBSCRIPTION.FAILURE,
  };
}
