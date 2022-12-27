export const notificationsActionTypes = {
  SET_NOTIFICATION: 'notifications/SET_NOTIFICATION',
  NAV_TO_ADD_PRESSED: 'notifications/NAV_TO_ADD_PRESSED',
  ADD_PRESSED: 'notifications/ADD_PRESSED',
  NAV_TO_UPDATE_PRESSED: 'notifications/NAV_TO_UPDATE_PRESSED',
  UPDATE_PRESSED: 'notifications/UPDATE_PRESSED',
  DELETE_PRESSED: 'notifications/DELETE_PRESSED',
};

export const notificationsActionCreators = {
  setNotification(notification) {
    return { type: notificationsActionTypes.SET_NOTIFICATION, payload: { notification } };
  },
  navToAddPressed() {
    return { type: notificationsActionTypes.NAV_TO_ADD_PRESSED };
  },
  addPressed(frequency, data) {
    return { type: notificationsActionTypes.ADD_PRESSED, payload: { frequency, data } };
  },
  navToUpdatePressed() {
    return { type: notificationsActionTypes.NAV_TO_UPDATE_PRESSED };
  },
  updatePressed(frequency, data) {
    return { type: notificationsActionTypes.UPDATE_PRESSED, payload: { frequency, data } };
  },
  deletePressed(goBack) {
    return { type: notificationsActionTypes.DELETE_PRESSED, payload: { goBack } };
  },
};
