import { take, put, call, fork } from 'redux-saga/effects';
import ApiSauce from '../services/ApiSauce';
import * as types from '../actions/ActionTypes';
import { LOGIN, API_PROFILE } from '../config/WebService';
import { success, failure } from '../actions/login';
import { request as requestProfile } from '../actions/profile';
import { NavigationActions } from 'react-navigation';
import Toast from 'react-native-simple-toast';
function callRequest(data) {
  return ApiSauce.post(LOGIN, data);
}

function* watchRequest() {
  while (true) {
    const { payload } = yield take(types.LOGIN.REQUEST);
    try {
      const response = yield call(callRequest, payload);
      console.log(response, 'response');
      if (response.status) {
        if (response.response.login_status) {
          yield put(success(response.response));
          yield put(requestProfile(payload));
        } else {
          yield put(success(response.response));

          Toast.show('Subscribe to a Plan to continue');
          yield put(
            NavigationActions.navigate({
              routeName: 'Subscription',
              params: {
                email: response.response.email,
                user_id: response.response.user_id,
              },
            }),
          );
        }
      } else {
        yield put(failure(response.message));
        Toast.show(response.message);
      }
    } catch (err) {
      yield put(failure(err.message));
      Toast.show(err.message);
    }
  }
}

export default function* root() {
  yield fork(watchRequest);
}
