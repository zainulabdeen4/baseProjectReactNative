// @flow

import { NOTIFICATIONS } from './ActionTypes';

export function request(payload: Object) {
  return {
    type: NOTIFICATIONS.REQUEST,
    payload,
  };
}

export function success(data: Object) {
  return {
    data,
    type: NOTIFICATIONS.SUCCESS,
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: NOTIFICATIONS.FAILURE,
  };
}
