import { Button } from 'native-base';
import React from 'react';

import ChangeThemeButton from '../../components/ChangeThemeButton';
import ScreenWrapper from '../../components/ScreenWrapper';

function Intro({ onNext }) {
  return (
    <ScreenWrapper title="Death reminder">
      <Button onPress={onNext}>Next</Button>
      <ChangeThemeButton />
    </ScreenWrapper>
  );
}

export default Intro;
