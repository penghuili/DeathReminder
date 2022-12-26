import notifee from '@notifee/react-native';

export async function fetchNotifications() {
  try {
    const notifications = await notifee.getTriggerNotifications();

    return notifications;
  } catch (e) {
    console.log('fetchNotifications', e);
    return [];
  }
}
