import { RepeatFrequency } from '@notifee/react-native';
import { Button, Radio } from 'native-base';
import React, { useState } from 'react';

import HourSelector from '../../components/HourSelector';
import ScreenWrapper from '../../components/ScreenWrapper';
import WeekDaySelector, { weekDayOptions } from '../../components/WeekDaySelector';

function AddNotification({ onSave }) {
  const [frequency, setFrequency] = useState(RepeatFrequency.WEEKLY);
  const [weekDay, setWeekDay] = useState(weekDayOptions[0]);
  const [hour, setHour] = useState(8);

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
        onPress={() => onSave(frequency, { hour, weekDay: weekDay.date })}
        isDisabled={!weekDay || !hour}
        mt="4"
      >
        Save
      </Button>
    </ScreenWrapper>
  );
}

export default AddNotification;
