// @flow

import { GET_EVENT_TYPE } from './ActionTypes';

export function request(payload: Object) {
  return {
    type: GET_EVENT_TYPE.REQUEST,
    payload,
  };
}

export function success(data: Object) {
  return {
    data,
    type: GET_EVENT_TYPE.SUCCESS,
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: GET_EVENT_TYPE.FAILURE,
  };
}
