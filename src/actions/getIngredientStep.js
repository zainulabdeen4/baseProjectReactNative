// @flow

import { GET_INGREDIENTS_STEP } from "./ActionTypes";

export function request(payload:Object) {
  return {
    type: GET_INGREDIENTS_STEP.REQUEST,
    payload
  };
}

export function success(data: Object) {
  return {
    data,
    type: GET_INGREDIENTS_STEP.SUCCESS
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: GET_INGREDIENTS_STEP.FAILURE
  };
}
