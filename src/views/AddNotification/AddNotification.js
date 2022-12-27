import { RepeatFrequency } from '@notifee/react-native';
import { Box, Button, Radio } from 'native-base';
import React, { useState } from 'react';

import HourSelector from '../../components/HourSelector';
import ScreenWrapper from '../../components/ScreenWrapper';
import WeekDaySelector, { weekDayOptions } from '../../components/WeekDaySelector';

function AddNotification({ onSave }) {
  const [frequency, setFrequency] = useState(RepeatFrequency.WEEKLY);
  const [weekDay, setWeekDay] = useState(weekDayOptions[0]);
  const [hour, setHour] = useState(8);

  return (
    <ScreenWrapper hasBack title="Add notification">
      <Radio.Group name="notificationFrequency" value={frequency} onChange={setFrequency}>
        <Box mb="2">
          <Radio value={RepeatFrequency.WEEKLY}>Weekly</Radio>
        </Box>
        <Box mb="2">
          <Radio value={RepeatFrequency.DAILY}>Daily</Radio>
        </Box>
        <Box mb="2">
          <Radio value={RepeatFrequency.HOURLY}>Hourly</Radio>
        </Box>
      </Radio.Group>

      {frequency === RepeatFrequency.WEEKLY && (
        <WeekDaySelector value={weekDay} onChange={setWeekDay} />
      )}

      {(frequency === RepeatFrequency.WEEKLY || frequency === RepeatFrequency.DAILY) && (
        <HourSelector value={hour} onChange={setHour} />
      )}

      <Box flexDirection="row" mt="4">
        <Button
          onPress={() => onSave(frequency, { hour, weekDay: weekDay.date })}
          isDisabled={!weekDay || !hour}
        >
          Save
        </Button>
      </Box>
    </ScreenWrapper>
  );
}

export default AddNotification;
