import { NavigationContainer } from '@react-navigation/native';
import { extendTheme, NativeBaseProvider } from 'native-base';
import React from 'react';

import Router from './router';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};
const customTheme = extendTheme({ config });

function App() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
