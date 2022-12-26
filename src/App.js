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
