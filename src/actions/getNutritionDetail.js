// @flow

import { GET_NUTRITION_DETAIL } from './ActionTypes';

export function request(payload: Object) {
  return {
    type: GET_NUTRITION_DETAIL.REQUEST,
    payload,
  };
}

export function success(data: Object) {
  return {
    data,
    type: GET_NUTRITION_DETAIL.SUCCESS,
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: GET_NUTRITION_DETAIL.FAILURE,
  };
}

export function clear(errorMessage: Object) {
  return {
    errorMessage,
    type: GET_NUTRITION_DETAIL.CANCEL,
  };
}
