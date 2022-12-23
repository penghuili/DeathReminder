import { extendTheme, NativeBaseProvider } from 'native-base';
import React from 'react';

import AppWrapper from './components/AppWrapper';
import Intro from './views/Intro';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};
const customTheme = extendTheme({ config });

function App() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <AppWrapper>
        <Intro />
      </AppWrapper>
    </NativeBaseProvider>
  );
}

export default App;
