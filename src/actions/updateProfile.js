// @flow

import { UPDATE_PROFILE } from './ActionTypes';

export function request(payload: Object) {
  return {
    type: UPDATE_PROFILE.REQUEST,
    payload,
  };
}

export function success(data: Object) {
  return {
    data,
    type: UPDATE_PROFILE.SUCCESS,
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: UPDATE_PROFILE.FAILURE,
  };
}
