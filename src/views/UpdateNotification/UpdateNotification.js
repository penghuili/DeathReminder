import { RepeatFrequency } from '@notifee/react-native';
import { getDay, getHours } from 'date-fns';
import { Button, Radio } from 'native-base';
import React, { useState } from 'react';

import HourSelector from '../../components/HourSelector';
import ScreenWrapper from '../../components/ScreenWrapper';
import WeekDaySelector, { weekDayOptions } from '../../components/WeekDaySelector';

function UpdateNotification({ notification, onUpdate }) {
  const [frequency, setFrequency] = useState(notification.trigger.repeatFrequency);
  const [weekDay, setWeekDay] = useState(weekDayOptions[getDay(notification.trigger.timestamp)]);
  const [hour, setHour] = useState(getHours(notification.trigger.timestamp));

  function renderWeekDays() {
    if (frequency === RepeatFrequency.WEEKLY) {
      return <WeekDaySelector value={weekDay} onChange={setWeekDay} />;
    }
    return null;
  }

  return (
    <ScreenWrapper hasBack title="Add notification">
      <Radio.Group name="notificationFrequency" value={frequency} onChange={setFrequency}>
        <Radio value={RepeatFrequency.DAILY} mb="2">
          Daily
        </Radio>
        <Radio value={RepeatFrequency.WEEKLY}>Weekly</Radio>
      </Radio.Group>
      {renderWeekDays()}
      <HourSelector value={hour} onChange={setHour} />
      <Button
        onPress={() => onUpdate(frequency, { hour, weekDay: weekDay.date })}
        isDisabled={!weekDay || !hour}
        mt="4"
      >
        Save
      </Button>
    </ScreenWrapper>
  );
}

export default UpdateNotification;
