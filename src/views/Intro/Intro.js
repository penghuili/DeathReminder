import React from 'react';

import ChangeThemeButton from '../../components/ChangeThemeButton';
import Icon from '../../components/Icon';
import ScreenWrapper from '../../components/ScreenWrapper';

function Intro() {
  return (
    <ScreenWrapper title="Intro">
      <Icon name="account-plus" />

      <ChangeThemeButton />
    </ScreenWrapper>
  );
}

export default Intro;
