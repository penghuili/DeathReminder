import { HStack, Pressable, Text } from 'native-base';
import React from 'react';

function ListItem({ children, onPress }) {
  return (
    <HStack alignItems="center" mb="4">
      <Pressable onPress={onPress}>
        {typeof children === 'string' ? <Text>{children}</Text> : children}
      </Pressable>
    </HStack>
  );
}

export default ListItem;
