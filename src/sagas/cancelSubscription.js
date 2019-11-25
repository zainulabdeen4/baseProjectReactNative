import { take, put, call, fork, select } from 'redux-saga/effects';
import ApiSauce from '../services/ApiSauce';
import * as types from '../actions/ActionTypes';
import { API_CANCEL_SUBSCRIPTION } from '../config/WebService';
import { success, failure } from '../actions/cancelSubscription';
import { logout } from '../actions/login';
import * as selectors from '../reducers/selectors';
import { NavigationActions } from 'react-navigation';
import Toast from 'react-native-simple-toast';

function callRequest({ data, profile }) {
  console.log('profile data', profile);
  return ApiSauce.post(
    API_CANCEL_SUBSCRIPTION,
    { subscriptionId: profile.subscriptionId, userid: data.user_id },
    {
      Authorization: `Bearer ${data.token}`,
    },
  );
}

function* watchRequest() {
  while (true) {
    const { payload } = yield take(types.CANCEL_SUBSCRIPTION.REQUEST);
    try {
      const { data } = yield select(selectors.loginData);
      const profileData = yield select(selectors.profile);

      const response = yield call(callRequest, {
        data: data,
        profile: profileData.data,
      });
      if (response.status) {
        yield put(success(response.response));
        yield put(logout());
        yield put(NavigationActions.navigate({ routeName: 'dashboard' }));
      } else {
        yield put(failure(response.message));
        Toast.show(response.message);
      }
    } catch (err) {
      if (err.error == 401) {
        Toast.show(err.message);
        yield put(logout());
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
