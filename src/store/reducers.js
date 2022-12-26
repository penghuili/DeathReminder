import { combineReducers } from 'redux';

import { notificationsReducer } from './notifications/notificationsReducer';
import { profileReducer } from './profile/profileReducer';
import { settingsReducer } from './settings/settingsReducer';

export const reducers = combineReducers({
  profile: profileReducer,
  notifications: notificationsReducer,
  settings: settingsReducer,
});
