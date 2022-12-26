import { useColorMode } from 'native-base';
import { useEffect } from 'react';

function ThemeWatcher({ colorMode: modeInStore }) {
  const { colorMode: modeInUI, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (modeInUI !== modeInStore) {
      toggleColorMode();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modeInUI, modeInStore]);

  return null;
}

export default ThemeWatcher;
