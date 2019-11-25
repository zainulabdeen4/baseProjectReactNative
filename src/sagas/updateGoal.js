import { take, put, call, fork, select } from 'redux-saga/effects';
import ApiSauce from '../services/ApiSauce';
import * as types from '../actions/ActionTypes';
import { API_UPDATE_GOAL } from '../config/WebService';
import { success, failure } from '../actions/updateGoal';
import { request as getGoals } from '../actions/getGoals';
import * as selectors from '../reducers/selectors';
import { NavigationActions } from 'react-navigation';
import Toast from 'react-native-simple-toast';

function callRequest(payload) {
  const { token } = payload;
  delete payload.token;
  return ApiSauce.post(API_UPDATE_GOAL, payload, {
    Authorization: `Bearer ${token}`,
  });
}

function* watchRequest() {
  while (true) {
    const { payload } = yield take(types.UPDATE_GOAL.REQUEST);
    try {
      const { data } = yield select(selectors.loginData);
      payload.token = data.token;
      const response = yield call(callRequest, payload);
      if (response.status) {
        yield put(success(response.response));
        yield put(getGoals({}));
        Toast.show('successfully updated');
        yield put(NavigationActions.back());
      } else {
        yield put(failure(response.message));
        Toast.show(response.message);
      }
    } catch (err) {
      if (err.error == 401) {
        Toast.show(err.message);
        yield put(NavigationActions.navigate({ routeName: 'dashboard' }));
        yield put(failure(err.message));
      }
      yield put(failure(err.message));
      Toast.show(err.message);
    }
  }
}

export default function* root() {
  yield fork(watchRequest);
}
