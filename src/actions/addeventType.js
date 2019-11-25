// @flow

import { ADD_EVENT_TYPE } from './ActionTypes';

export function request(payload: Object) {
  return {
    type: ADD_EVENT_TYPE.REQUEST,
    payload,
  };
}

export function success(data: Object) {
  return {
    data,
    type: ADD_EVENT_TYPE.SUCCESS,
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: ADD_EVENT_TYPE.FAILURE,
  };
}
