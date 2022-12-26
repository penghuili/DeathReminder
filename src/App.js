import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Toast from 'react-native-toast-message';
import { Provider as StoreProvider } from 'react-redux';

import UIProvider from './components/UIProvider';
import Router from './router';
import { navigationRef } from './router/navigationRef';
import store from './store';

function App() {
  return (
    <StoreProvider store={store}>
      <UIProvider>
        <NavigationContainer ref={navigationRef}>
          <Router />

          <Toast />
        </NavigationContainer>
      </UIProvider>
    </StoreProvider>
  );
}

export default App;
