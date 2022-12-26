import { notificationsActionTypes } from './notificationsActions';

const initialState = {
  notification: null,
};

function handleSetNotification(state, { notification }) {
  return { ...state, notification };
}

export function notificationsReducer(state = initialState, action) {
  switch (action.type) {
    case notificationsActionTypes.SET_NOTIFICATION:
      return handleSetNotification(state, action.payload);

    default:
      return state;
  }
}
