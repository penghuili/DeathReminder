import { Spinner } from 'native-base';
import React from 'react';

import ScreenWrapper from './ScreenWrapper';

function AppLoading() {
  return (
    <ScreenWrapper title="Death reminder">
      <Spinner size="lg" />
    </ScreenWrapper>
  );
}

export default AppLoading;
