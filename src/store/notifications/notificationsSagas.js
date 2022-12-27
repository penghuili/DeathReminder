import notifee, { AuthorizationStatus, RepeatFrequency, TriggerType } from '@notifee/react-native';
import { addDays, addWeeks, getHours, setHours, startOfDay } from 'date-fns';
import { all, call, fork, put, select, takeLatest } from 'redux-saga/effects';

import { showToast } from '../../lib/toast';
import { navigationRef } from '../../router/navigationRef';
import { routeNames } from '../../router/routeNames';
import { notificationsActionCreators, notificationsActionTypes } from './notificationsActions';
import { fetchNotifications } from './notificationsHelpers';
import { notificationsSelectors } from './notificationsSelectors';

function* init() {
  const notifications = yield call(fetchNotifications);
  if (notifications?.length) {
    yield put(notificationsActionCreators.setNotification(notifications[0]));
  }
}

function* handleNavToAddPressed() {
  yield call(navigationRef.navigate, routeNames.addNotification);
}

function getTimestamp(frequency, data) {
  if (frequency === RepeatFrequency.HOURLY) {
    const now = new Date();
    const hours = getHours(now);
    const nextHour = hours + 1;
    const dayStart = startOfDay(now);
    const date = nextHour > 23 ? addDays(dayStart, 1) : setHours(dayStart, nextHour);
    return date.getTime();
  }

  if (frequency === RepeatFrequency.DAILY) {
    const { hour } = data;
    const timestamp = setHours(startOfDay(new Date()), hour).getTime();
    return timestamp < Date.now() ? addDays(timestamp, 1).getTime() : timestamp;
  }

  if (frequency === RepeatFrequency.WEEKLY) {
    const { hour, weekDay } = data;

    const timestamp = setHours(startOfDay(weekDay), hour).getTime();
    return timestamp < Date.now() ? addWeeks(timestamp, 1).getTime() : timestamp;
  }

  return null;
}
function* handleAddPressed({ payload: { frequency, data } }) {
  // Request permissions (required for iOS)
  const result = yield call(notifee.requestPermission);
  if (result.authorizationStatus === AuthorizationStatus.DENIED) {
    yield call(showToast, 'You will not get notifications.');
    return;
  }

  if (
    result.authorizationStatus === AuthorizationStatus.AUTHORIZED ||
    result.authorizationStatus === AuthorizationStatus.PROVISIONAL
  ) {
    // Create a channel (required for Android)
    const channelId = yield call(notifee.createChannel, {
      id: 'android-channel',
      name: 'Android Channel',
    });

    const timestamp = getTimestamp(frequency, data);
    if (!timestamp) {
      return;
    }

    const trigger = {
      type: TriggerType.TIMESTAMP,
      timestamp,
      repeatFrequency: frequency,
    };

    yield call(
      notifee.createTriggerNotification,
      {
        title: 'Check how long you can still live.',
        android: {
          channelId,
        },
      },
      trigger
    );

    yield call(showToast, 'Your notification is set.');

    const notifications = yield call(fetchNotifications);
    yield put(notificationsActionCreators.setNotification(notifications[0]));
    yield call(navigationRef.goBack);
  }
}

function* handleUpdatePressed({ payload: { frequency, data } }) {
  const notification = yield select(notificationsSelectors.getNotification);
  if (!notification) {
    return;
  }

  // Create a channel (required for Android)
  const channelId = yield call(notifee.createChannel, {
    id: 'android-channel',
    name: 'Android Channel',
  });

  const timestamp = getTimestamp(frequency, data);
  if (!timestamp) {
    return;
  }

  const trigger = {
    type: TriggerType.TIMESTAMP,
    timestamp,
    repeatFrequency: frequency,
  };

  yield call(
    notifee.createTriggerNotification,
    {
      id: notification.notification.id,
      title: 'Check how long you can still live.',
      android: {
        channelId,
      },
    },
    trigger
  );

  yield call(showToast, 'Your notification is updated.');

  const notifications = yield call(fetchNotifications);
  yield put(notificationsActionCreators.setNotification(notifications[0]));
}

function* handleNavToUpdatePressed() {
  yield call(navigationRef.navigate, routeNames.updateNotification);
}

function* handleDeletePressed({ payload: { id } }) {
  if (!id) {
    return;
  }
  yield call(notifee.cancelNotification, id);
  yield call(navigationRef.goBack);
  yield put(notificationsActionCreators.setNotification(null));
  yield call(showToast, 'Notification is deleted.');
}

export function* notificationsSagas() {
  yield fork(init);
  yield all([
    takeLatest(notificationsActionTypes.NAV_TO_ADD_PRESSED, handleNavToAddPressed),
    takeLatest(notificationsActionTypes.ADD_PRESSED, handleAddPressed),
    takeLatest(notificationsActionTypes.NAV_TO_UPDATE_PRESSED, handleNavToUpdatePressed),
    takeLatest(notificationsActionTypes.UPDATE_PRESSED, handleUpdatePressed),
    takeLatest(notificationsActionTypes.DELETE_PRESSED, handleDeletePressed),
  ]);
}
