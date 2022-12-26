import { ScrollView, StatusBar } from 'native-base';
import React from 'react';

import { useColors } from '../hooks/useColors';
import { useIsDark } from '../hooks/useIsDark';
import Header from './Header';

function ScreenWrapper({ hasBack, title, children }) {
  const isDark = useIsDark();
  const { bgLight, bgDark } = useColors();

  return (
    <ScrollView h="100%" px={2} bg={isDark ? bgDark : bgLight}>
      <StatusBar
        backgroundColor={isDark ? bgDark : bgLight}
        barStyle={isDark ? 'light-content' : 'dark-content'}
      />
      <Header title={title} hasBack={hasBack} />
      {children}
    </ScrollView>
  );
}

export default ScreenWrapper;
