import { extendTheme, NativeBaseProvider } from 'native-base';
import React from 'react';

const darkTheme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: 'dark',
  },
});
const lightTheme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
});

function UIProvider({ colorMode, children }) {
  return (
    <NativeBaseProvider theme={colorMode === 'light' ? lightTheme : darkTheme}>
      {children}
    </NativeBaseProvider>
  );
}

export default UIProvider;
