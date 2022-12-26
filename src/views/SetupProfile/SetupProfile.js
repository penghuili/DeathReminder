import { format, subYears } from 'date-fns';
import { Box, Button, HStack, Slider, Text, useColorMode } from 'native-base';
import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';

import ScreenWrapper from '../../components/ScreenWrapper';

const now = new Date();

function SetupProfile({
  birthday: birthdayInStore,
  expectedAge: expectedAgeInStore,
  onFinish,
  onDelete,
}) {
  const { colorMode } = useColorMode();
  const [birthday, setBirthday] = useState(birthdayInStore || subYears(now, 30));
  const [showPicker, setShowPicker] = useState(false);
  const [expectedAge, setExpectedAge] = useState(expectedAgeInStore || 90);

  const hasProfile = !!birthdayInStore && !!expectedAgeInStore;

  return (
    <ScreenWrapper hasBack title={hasProfile ? 'Update profile' : 'Set up profile'}>
      <HStack flexDirection="row" alignItems="center" space="xs">
        <Text>Birthday: {format(birthday, 'yyyy-MM-dd')}</Text>
        <Button variant="ghost" size="xs" onPress={() => setShowPicker(true)}>
          Change
        </Button>
      </HStack>

      <Text>Expected age: {expectedAge}</Text>
      <Slider value={expectedAge} onChange={setExpectedAge} minValue={0} maxValue={150} step={5}>
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>

      <Box flexDirection="row" justifyContent="space-between" mt="4">
        <Button
          onPress={() => onFinish(birthday, expectedAge)}
          isDisabled={!birthday || !expectedAge}
        >
          Finish
        </Button>

        {hasProfile && (
          <Button onPress={onDelete} colorScheme="danger">
            Delete
          </Button>
        )}
      </Box>

      <DatePicker
        modal
        open={showPicker}
        mode="date"
        date={birthday}
        onConfirm={newDate => {
          setBirthday(newDate);
          setShowPicker(false);
        }}
        onCancel={() => setShowPicker(false)}
        theme={colorMode}
        androidVariant="iosClone"
      />
    </ScreenWrapper>
  );
}

export default SetupProfile;
