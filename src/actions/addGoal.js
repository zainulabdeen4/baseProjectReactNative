// @flow

import { ADD_GOAL } from './ActionTypes';

export function request(payload: Object) {
  return {
    type: ADD_GOAL.REQUEST,
    payload,
  };
}

export function success(data: Object) {
  return {
    data,
    type: ADD_GOAL.SUCCESS,
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: ADD_GOAL.FAILURE,
  };
}
