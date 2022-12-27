import { Box, Button, Text } from 'native-base';
import React from 'react';

import Icon from '../../components/Icon';
import ScreenWrapper from '../../components/ScreenWrapper';
import { useColors } from '../../hooks/useColors';
import { routeNames } from '../../router/routeNames';

function Intro({ route: { name: routeName }, onNext }) {
  const { textDark } = useColors();

  return (
    <ScreenWrapper hasBack={routeName === routeNames.why} title="Death reminder">
      <Text>Everyone will die</Text>
      <Text>Strangers</Text>
      <Text>Your friends, your family</Text>
      <Text mb="4">Yourself</Text>
      <Text>Keeping this very fact in mind</Text>
      <Text>May change how you live</Text>

      {routeName === routeNames.intro && (
        <Box flexDirection="row" mt="4">
          <Button
            onPress={onNext}
            endIcon={<Icon name="chevron-double-right" size="6" color={textDark} />}
          >
            Next
          </Button>
        </Box>
      )}
    </ScreenWrapper>
  );
}

export default Intro;
