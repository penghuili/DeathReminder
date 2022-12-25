import notifee, { RepeatFrequency, TriggerType } from '@notifee/react-native';
import { addSeconds } from 'date-fns';
import { Box, Button, Text } from 'native-base';
import React, { useEffect, useState } from 'react';

import ScreenWrapper from '../../components/ScreenWrapper';

function Home() {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    notifee.getTriggerNotifications().then(ns => {
      setNotifications(ns);
    });
  }, []);

  async function displayNotification() {
    // Request permissions (required for iOS)
    const result = await notifee.requestPermission();
    console.log(result);

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    const trigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: addSeconds(new Date(), 5).getTime(), // fire at 11:10am (10 minutes before meeting)
      repeatFrequency: RepeatFrequency.HOURLY,
    };

    // Create a trigger notification
    await notifee.createTriggerNotification(
      {
        title: 'Meeting with Jane',
        body: 'Today at 11:20am',
        android: {
          channelId,
        },
      },
      trigger
    );
  }

  return (
    <ScreenWrapper title="Home">
      <Button onPress={displayNotification}>Display Notification</Button>
      {/* <ChangeThemeButton /> */}
      {notifications.map(n => (
        <Box key={n.notification.id}>
          <Text>
            {n.notification.title} - {n.notification.id}
          </Text>
          <Button onPress={() => notifee.cancelNotification(n.notification.id)}>Cancel</Button>
        </Box>
      ))}
    </ScreenWrapper>
  );
}

export default Home;
