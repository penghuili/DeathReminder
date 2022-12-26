import { Select, Text } from 'native-base';
import React from 'react';

import { useColors } from '../hooks/useColors';

const hoursOptions = Array(24)
  .fill(0)
  .map((_, index) => index);

function HourSelector({ value, onChange }) {
  const { primary } = useColors();

  return (
    <>
      <Text mt="4">Choose time: {value} o'clock</Text>
      <Select
        selectedValue={value}
        placeholder={`${value} o'clock`}
        _selectedItem={{
          bgColor: primary,
        }}
        onValueChange={onChange}
      >
        {hoursOptions.map(h => (
          <Select.Item key={h} label={h} value={h} />
        ))}
      </Select>
    </>
  );
}

export default HourSelector;
