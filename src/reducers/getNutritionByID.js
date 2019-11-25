// @flow
import Immutable from 'seamless-immutable';
import * as types from '../actions/ActionTypes';

const initialState = Immutable({
  failure: false,
  isFetching: false,
  errorMessage: '',
  data: null,
});

export default (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case types.GET_NUTRITION_BY_ID.REQUEST:
      return Immutable.merge(state, {
        isFetching: true,
      });
    case types.GET_NUTRITION_BY_ID.SUCCESS:
      return Immutable.merge(state, {
        failure: false,
        isFetching: false,
        errorMessage: '',
        data: action.data,
      });
    case types.GET_NUTRITION_BY_ID.FAILURE:
      return Immutable.merge(state, {
        failure: true,
        isFetching: false,
        errorMessage: action.errorMessage,
      });
    case types.GET_NUTRITION_BY_ID.CANCEL:
      return initialState;

    case types.LOGOUT:
      return initialState;
    default:
      return state;
  }
};
