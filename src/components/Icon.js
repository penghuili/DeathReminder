import React from 'react';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useColors } from '../hooks/useColors';
import { useIsDark } from '../hooks/useIsDark';

function Icon({ name, size = 24, color, onPress }) {
  const isDark = useIsDark();
  const { textDark, textLight } = useColors();

  return (
    <MIcon
      name={name}
      size={size}
      color={color || (isDark ? textDark : textLight)}
      onPress={onPress}
    />
  );
}

export default Icon;
