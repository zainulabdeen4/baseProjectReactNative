// @flow

import { GET_INGREDIENTS_BY_NUTRITION_NAME_ID } from './ActionTypes';

export function request(payload: Object) {
  return {
    type: GET_INGREDIENTS_BY_NUTRITION_NAME_ID.REQUEST,
    payload,
  };
}

export function success(data: Object) {
  return {
    data,
    type: GET_INGREDIENTS_BY_NUTRITION_NAME_ID.SUCCESS,
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: GET_INGREDIENTS_BY_NUTRITION_NAME_ID.FAILURE,
  };
}
export function clear(errorMessage: Object) {
  return {
    errorMessage,
    type: GET_INGREDIENTS_BY_NUTRITION_NAME_ID.CANCEL,
  };
}
