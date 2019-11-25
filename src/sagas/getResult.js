import { take, put, call, fork, select } from 'redux-saga/effects';
import ApiSauce from '../services/ApiSauce';
import * as types from '../actions/ActionTypes';
import { API_GET_RESULT } from '../config/WebService';
import { success, failure } from '../actions/getResult';
import { loginSelector } from '../reducers/selectors';
import { NavigationActions } from 'react-navigation';
import Toast from 'react-native-simple-toast';
function callRequest(token) {
  return ApiSauce.post(
    API_GET_RESULT,
    {},
    {
      Authorization: `Bearer ${token}`,
    },
  );
}

function* watchRequest() {
  while (true) {
    const { payload } = yield take(types.GET_RESULT.REQUEST);
    try {
      const { login } = yield select();
      let { token } = login.data;
      const response = yield call(callRequest, token);
      if (response.status) {
        yield put(success(response.response));

        // yield put(NavigationActions.navigate({routeName:'home'}))
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
