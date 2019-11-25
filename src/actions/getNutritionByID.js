// @flow

import { GET_NUTRITION_BY_ID } from './ActionTypes';

export function request(payload: Object) {
  return {
    type: GET_NUTRITION_BY_ID.REQUEST,
    payload,
  };
}

export function success(data: Object) {
  return {
    data,
    type: GET_NUTRITION_BY_ID.SUCCESS,
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: GET_NUTRITION_BY_ID.FAILURE,
  };
}

export function clear(errorMessage: Object) {
  return {
    errorMessage,
    type: GET_NUTRITION_BY_ID.CANCEL,
  };
}
