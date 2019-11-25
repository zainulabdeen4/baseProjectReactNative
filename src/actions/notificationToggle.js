// @flow

import { NOTIFICATIONS_TOGGLE } from './ActionTypes';

export function request(payload: Object) {
  return {
    type: NOTIFICATIONS_TOGGLE.REQUEST,
    payload,
  };
}

export function success(data: Object) {
  return {
    data,
    type: NOTIFICATIONS_TOGGLE.SUCCESS,
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: NOTIFICATIONS_TOGGLE.FAILURE,
  };
}
