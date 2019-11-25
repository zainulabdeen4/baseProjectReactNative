// @flow

import { NOTIFICATIONS_STATE } from './ActionTypes';

export function request(payload: Object) {
  return {
    type: NOTIFICATIONS_STATE.REQUEST,
    payload,
  };
}

export function success(data: Object) {
  return {
    data,
    type: NOTIFICATIONS_STATE.SUCCESS,
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: NOTIFICATIONS_STATE.FAILURE,
  };
}
