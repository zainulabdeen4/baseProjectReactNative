// @flow

import { GET_GOAL_DETAIL } from './ActionTypes';

export function request(payload: Object) {
  return {
    type: GET_GOAL_DETAIL.REQUEST,
    payload,
  };
}

export function success(data: Object) {
  return {
    data,
    type: GET_GOAL_DETAIL.SUCCESS,
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: GET_GOAL_DETAIL.FAILURE,
  };
}

export function reset(payload: Object) {
  return {
    type: 'GET_GOAL_DETAIL_RESET',
    payload,
  };
}
