import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import { LocalStorage, LocalStorageKeys } from '../../lib/localstorage';
import { navigationRef } from '../../router/navigationRef';
import { routeNames } from '../../router/routeNames';
import { settingsActionCreators, settingsActionTypes } from './settingsActions';

function* init() {
  const colorMode = yield call(LocalStorage.get, LocalStorageKeys.theme);
  if (colorMode) {
    yield put(settingsActionCreators.setTheme(colorMode));
  }
}

function* handleBack() {
  yield call(navigationRef.goBack);
}

function* handleNavToChangeThemePressed() {
  yield call(navigationRef.navigate, routeNames.changeTheme);
}

function* handleChangeThemePressed({ payload: { colorMode } }) {
  yield call(LocalStorage.set, LocalStorageKeys.theme, colorMode);
  yield put(settingsActionCreators.setTheme(colorMode));
}

export function* settingsSagas() {
  yield fork(init);

  yield all([
    takeLatest(settingsActionTypes.BACK, handleBack),
    takeLatest(settingsActionTypes.NAV_TO_CHANGE_THEME_PRESSED, handleNavToChangeThemePressed),
    takeLatest(settingsActionTypes.CHANGE_THEME_PRESSED, handleChangeThemePressed),
  ]);
}
