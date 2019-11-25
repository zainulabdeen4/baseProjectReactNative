import { LOAD } from 'redux-storage';
import { take, fork, select, put } from 'redux-saga/effects';
import * as selectors from '../reducers/selectors';
import { NavigationActions, SwitchActions } from 'react-navigation';

function* watchReduxLoadFromDisk() {
  while (true) {
    yield take(LOAD);
    try {
      const login = yield select(selectors.loginData);
      const profile = yield select(selectors.profile);
      if (login.data && profile.data) {
        yield put(NavigationActions.navigate({ routeName: 'home' }));
      } else yield put(NavigationActions.navigate({ routeName: 'dashboard' }));
      console.log('Saga init working ');
    } catch (err) {
      console.warn('saga watchReduxLoadFromDisk error: ', err);
    }
  }
}

export default function* root() {
  yield fork(watchReduxLoadFromDisk);
}
