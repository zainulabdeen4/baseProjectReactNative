// @flow

import { GET_RESULT_DETAIL } from './ActionTypes';

export function request(payload: Object) {
  return {
    type: GET_RESULT_DETAIL.REQUEST,
    payload,
  };
}

export function success(data: Object) {
  return {
    data,
    type: GET_RESULT_DETAIL.SUCCESS,
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: GET_RESULT_DETAIL.FAILURE,
  };
}

export function reset(errorMessage: Object) {
  return {
    errorMessage,
    type: 'GET_RESULT_DETAIL_RESET',
  };
}
