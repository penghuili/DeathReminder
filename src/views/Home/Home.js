import { RepeatFrequency } from '@notifee/react-native';
import { addYears, differenceInDays, differenceInYears, format, getDay, getHours } from 'date-fns';
import { Box, Button, Divider, Heading, Text } from 'native-base';
import React, { useMemo } from 'react';

import ScreenWrapper from '../../components/ScreenWrapper';
import { weekDayStrings } from '../../lib/constants';

function Home({
  birthday,
  expectedAge,
  notification,
  onUpdateProfile,
  onDeleteProfile,
  onAddNotification,
  onUpdateNotification,
  onDeleteNotification,
}) {
  const deadDay = useMemo(
    () => format(addYears(birthday, expectedAge), 'yyyy-MM-dd'),
    [birthday, expectedAge]
  );

  const remaining = useMemo(() => {
    const now = new Date();
    const lastDay = addYears(birthday, expectedAge);

    if (now >= lastDay) {
      return 'You are dead.';
    }

    const fullYears = differenceInYears(lastDay, now);
    const fullYearsDate = addYears(now, fullYears);
    const days = differenceInDays(lastDay, fullYearsDate);
    return `${fullYears} years, ${days} days.`;
  }, [birthday, expectedAge]);

  function renderNotification() {
    if (!notification) {
      return null;
    }

    const date = new Date(notification.trigger.timestamp);
    if (notification.trigger.repeatFrequency === RepeatFrequency.DAILY) {
      return `You will be notified every day at ${getHours(date)} o'clock.`;
    }

    return `You will be notified weekly on ${weekDayStrings[getDay(date)]} at ${getHours(
      date
    )} o'clock.`;
  }

  return (
    <ScreenWrapper title="Home">
      <Heading size="sm" mb="2">
        Your profile
      </Heading>
      <Text>Birthday: {format(birthday, 'yyyy-MM-dd')}</Text>
      <Text>Expected age: {expectedAge}</Text>
      <Text>You will die on: {deadDay}</Text>
      <Text>You can still live: {remaining}</Text>
      <Box mt="2" flexDirection="row" justifyContent="space-between">
        <Button onPress={onUpdateProfile}>Update</Button>

        <Button colorScheme="danger" onPress={onDeleteProfile}>
          Delete
        </Button>
      </Box>

      <Divider mt="4" mb="4" />

      <Heading size="sm" mb="2">
        Notifications
      </Heading>
      {!notification && <Button onPress={onAddNotification}>Add notification</Button>}

      {!!notification && (
        <>
          <Text>{renderNotification()}</Text>
          <Box mt="2" flexDirection="row" justifyContent="space-between">
            <Button onPress={onUpdateNotification}>Edit</Button>
            <Button
              onPress={() => onDeleteNotification(notification.notification.id)}
              colorScheme="danger"
            >
              Cancel
            </Button>
          </Box>
        </>
      )}
    </ScreenWrapper>
  );
}

export default Home;
