// @flow

import { UPDATE_GOAL } from "./ActionTypes";

export function request(payload:Object) {
  return {
    type: UPDATE_GOAL.REQUEST,
    payload
  };
}

export function success(data: Object) {
  return {
    data,
    type: UPDATE_GOAL.SUCCESS
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: UPDATE_GOAL.FAILURE
  };
}
