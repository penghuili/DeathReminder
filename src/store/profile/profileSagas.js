import { format } from 'date-fns';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import { LocalStorage, LocalStorageKeys } from '../../lib/localstorage';
import { showToast } from '../../lib/toast';
import { navigationRef } from '../../router/navigationRef';
import { routeNames } from '../../router/routeNames';
import { profileActionCreators, profileActionTypes } from './profileActions';

function* init() {
  const birthday = yield call(LocalStorage.get, LocalStorageKeys.birthday);
  const expectedAge = yield call(LocalStorage.get, LocalStorageKeys.expectedAge);
  if (birthday && expectedAge) {
    yield put(profileActionCreators.setProfile({ birthday: new Date(birthday), expectedAge }));
  } else {
    if (birthday) {
      yield put(profileActionCreators.setBirthday(new Date(birthday)));
    }
    if (expectedAge) {
      yield put(profileActionCreators.setExpectedAge(expectedAge));
    }
  }

  yield put(profileActionCreators.setIsLoading(false));
}

function* handleIntroNextPressed() {
  yield call(navigationRef.navigate, routeNames.setupProfile);
}

function* handleFinishSetupPressed({ payload: { birthday, expectedAge } }) {
  yield call(LocalStorage.set, LocalStorageKeys.birthday, format(birthday, 'yyyy-MM-dd'));
  yield call(LocalStorage.set, LocalStorageKeys.expectedAge, expectedAge);
  yield put(profileActionCreators.setProfile({ birthday, expectedAge }));
  yield call(showToast, 'Your profile is saved.');
}

function* handleDeletePressed() {
  yield call(LocalStorage.remove, LocalStorageKeys.birthday);
  yield call(LocalStorage.remove, LocalStorageKeys.expectedAge);
  yield put(profileActionCreators.setProfile({ birthday: null, expectedAge: null }));
  yield call(showToast, 'Your profile is deleted.');
}

export function* profileSagas() {
  yield fork(init);

  yield all([
    takeLatest(
      [profileActionTypes.INTRO_NEXT_PRESSED, profileActionTypes.UPDATE_PRESSED],
      handleIntroNextPressed
    ),
    takeLatest(profileActionTypes.FINISH_SETUP_PRESSED, handleFinishSetupPressed),
    takeLatest(profileActionTypes.DELETE_PRESSED, handleDeletePressed),
  ]);
}
