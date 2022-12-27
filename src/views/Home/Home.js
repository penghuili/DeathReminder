import { RepeatFrequency } from '@notifee/react-native';
import { addYears, format, getDay, getHours } from 'date-fns';
import { Box, Button, Divider, Heading, Text } from 'native-base';
import React, { useMemo } from 'react';

import Countdown from '../../components/Countdown';
import ScreenWrapper from '../../components/ScreenWrapper';
import { weekDayStrings } from '../../lib/constants';

function Home({
  birthday,
  expectedAge,
  notification,
  onUpdateProfile,
  onAddNotification,
  onUpdateNotification,
}) {
  const deadDay = useMemo(
    () => format(addYears(birthday, expectedAge), 'yyyy-MM-dd'),
    [birthday, expectedAge]
  );

  function renderNotification() {
    if (!notification) {
      return null;
    }

    const date = new Date(notification.trigger.timestamp);

    if (notification.trigger.repeatFrequency === RepeatFrequency.HOURLY) {
      return 'You will be notified every hour.';
    }

    if (notification.trigger.repeatFrequency === RepeatFrequency.DAILY) {
      return `You will be notified every day at ${getHours(date)} o'clock.`;
    }

    if (notification.trigger.repeatFrequency === RepeatFrequency.WEEKLY) {
      return `You will be notified weekly on ${weekDayStrings[getDay(date)]} at ${getHours(
        date
      )} o'clock.`;
    }

    return null;
  }

  return (
    <ScreenWrapper title="Home">
      <Heading size="sm" mb="2">
        Your profile
      </Heading>
      <Text>Today: {format(new Date(), 'yyyy-MM-dd')}</Text>
      <Text>Your birthday: {format(birthday, 'yyyy-MM-dd')}</Text>
      <Text>Your expected age: {expectedAge} years old</Text>
      <Box mt="2" flexDirection="row" justifyContent="space-between">
        <Button onPress={onUpdateProfile} size="sm">
          Update
        </Button>
      </Box>

      <Text mt="4">Then you will die on: {deadDay}</Text>
      <Text>And you can still live:</Text>
      <Countdown birthday={birthday} expectedAge={expectedAge} />

      <Divider mt="4" mb="4" />

      <Heading size="sm" mb="2">
        Notifications
      </Heading>
      {!notification && (
        <>
          <Text mb="2">
            Setup notification to notify yourself daily or weekly that you will die someday.
          </Text>
          <Box flexDirection="row">
            <Button onPress={onAddNotification}>Setup now</Button>
          </Box>
        </>
      )}

      {!!notification && (
        <>
          <Text>{renderNotification()}</Text>
          <Box mt="2" flexDirection="row" justifyContent="space-between">
            <Button onPress={onUpdateNotification}>Update</Button>
          </Box>
        </>
      )}
    </ScreenWrapper>
  );
}

export default Home;
