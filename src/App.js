import { NavigationContainer } from '@react-navigation/native';
import { extendTheme, NativeBaseProvider } from 'native-base';
import React from 'react';
import Toast from 'react-native-toast-message';
import { Provider as StoreProvider } from 'react-redux';

import ThemeWatcher from './components/ThemeWatcher';
import Router from './router';
import { navigationRef } from './router/navigationRef';
import store from './store';

const darkTheme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: 'dark',
  },
  fontSizes: {
    '2xs': 10,
    xs: 12,
    sm: 16,
    md: 18,
    lg: 20,
    xl: 22,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
    '6xl': 60,
    '7xl': 72,
    '8xl': 96,
    '9xl': 128,
  },
});

function App() {
  return (
    <StoreProvider store={store}>
      <NativeBaseProvider theme={darkTheme}>
        <NavigationContainer ref={navigationRef}>
          <Router />

          <Toast />
          <ThemeWatcher />
        </NavigationContainer>
      </NativeBaseProvider>
    </StoreProvider>
  );
}

export default App;
