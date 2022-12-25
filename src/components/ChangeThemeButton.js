import { Button, useColorMode } from 'native-base';
import React from 'react';

function ChangeThemeButton() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Button
      onPress={() => {
        toggleColorMode(colorMode === 'dark' ? 'light' : 'dark');
      }}
    >
      Change theme
    </Button>
  );
}

export default ChangeThemeButton;
