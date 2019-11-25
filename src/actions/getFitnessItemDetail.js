// @flow

import { GET_FITNESS_ITEM_DETAIL } from './ActionTypes';

export function request(payload: Object) {
  return {
    type: GET_FITNESS_ITEM_DETAIL.REQUEST,
    payload,
  };
}

export function success(data: Object) {
  return {
    data,
    type: GET_FITNESS_ITEM_DETAIL.SUCCESS,
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: GET_FITNESS_ITEM_DETAIL.FAILURE,
  };
}

export function clear(errorMessage: Object) {
  return {
    errorMessage,
    type: GET_FITNESS_ITEM_DETAIL.CANCEL,
  };
}
