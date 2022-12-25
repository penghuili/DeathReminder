import { useTheme } from 'native-base';

export function useColors() {
  const { colors } = useTheme();

  return {
    primary: colors.primary[600],
    textLight: colors.muted[900],
    textDark: colors.muted[50],
    bgLight: colors.warmGray[50],
    bgDark: colors.coolGray[900],
  };
}
