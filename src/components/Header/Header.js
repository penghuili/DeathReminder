import { Heading, HStack } from 'native-base';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Icon from '../Icon';

function Header({ hasBack, onBack, title }) {
  const { top } = useSafeAreaInsets();

  return (
    <HStack style={{ marginTop: top }} mb="3" alignItems="center">
      {hasBack && <Icon name="chevron-left" onPress={onBack} size="8" />}
      <Heading>{title}</Heading>
    </HStack>
  );
}

export default Header;
