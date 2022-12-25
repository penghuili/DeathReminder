import { Heading, HStack } from 'native-base';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Icon from '../Icon';

function Header({ hasBack, title }) {
  const { top } = useSafeAreaInsets();
  return (
    <HStack pt={top}>
      {hasBack && <Icon name="chevron-left" />}
      <Heading>{title}</Heading>
    </HStack>
  );
}

export default Header;
