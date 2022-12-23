import { ScrollView, StatusBar, useColorMode } from 'native-base';
import React from 'react';

function AppWrapper({ children }) {
  const { colorMode } = useColorMode();

  const isDark = colorMode === 'dark';

  return (
    <ScrollView h="full" bg={isDark ? 'coolGray.900' : 'warmGray.50'}>
      <StatusBar
        backgroundColor={isDark ? 'coolGray.800' : 'warmGray.50'}
        barStyle={isDark ? 'light-content' : 'dark-content'}
      />

      {children}
    </ScrollView>
  );
}

export default AppWrapper;
