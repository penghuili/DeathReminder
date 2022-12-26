import { all } from 'redux-saga/effects';

import { settingsSagas } from './settings/settingsSagas';
import { notificationsSagas } from './notifications/notificationsSagas';
import { profileSagas } from './profile/profileSagas';

export function* sagas() {
  yield all([profileSagas(), settingsSagas(), notificationsSagas()]);
}
