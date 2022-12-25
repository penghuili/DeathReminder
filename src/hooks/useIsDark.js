import { useColorMode } from 'native-base';

export function useIsDark() {
  const { colorMode } = useColorMode();

  return colorMode === 'dark';
}
