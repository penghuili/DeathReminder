import { Text } from 'native-base';
import React from 'react';
import DeviceInfo from 'react-native-device-info';

import ListItem from '../../components/ListItem';
import ScreenWrapper from '../../components/ScreenWrapper';

function Settings({ onChangeTheme }) {
  return (
    <ScreenWrapper title="Settings">
      <ListItem onPress={onChangeTheme}>Change theme</ListItem>
      <ListItem>
        <Text>
          v{DeviceInfo.getVersion()}({DeviceInfo.getBuildNumber()})
        </Text>
      </ListItem>
    </ScreenWrapper>
  );
}

export default Settings;
