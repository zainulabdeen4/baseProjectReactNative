// @flow

import { GET_PROFILE } from './ActionTypes';

export function request(payload) {
  return {
    type: GET_PROFILE.REQUEST,
    payload,
  };
}

export function success(data: Object) {
  return {
    data,
    type: GET_PROFILE.SUCCESS,
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: GET_PROFILE.FAILURE,
  };
}
