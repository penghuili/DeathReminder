import { setDay } from 'date-fns';
import { Select, Text } from 'native-base';
import React from 'react';

import { useColors } from '../hooks/useColors';
import { weekDayStrings } from '../lib/constants';

const now = new Date();
export const weekDayOptions = Array(7)
  .fill(0)
  .map((_, index) => {
    const date = setDay(now, index);

    return { weekDay: weekDayStrings[index], date };
  });

function WeekDaySelector({ value, onChange }) {
  const { primary } = useColors();

  return (
    <>
      <Text mt="4">Choose week day: {value.weekDay}</Text>
      <Select
        selectedValue={value}
        placeholder={value.weekDay}
        _selectedItem={{
          bgColor: primary,
        }}
        onValueChange={onChange}
      >
        {weekDayOptions.map(d => (
          <Select.Item key={d.weekDay} label={d.weekDay} value={d} />
        ))}
      </Select>
    </>
  );
}

export default WeekDaySelector;
