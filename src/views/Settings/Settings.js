import { Link, Text } from 'native-base';
import React from 'react';
import DeviceInfo from 'react-native-device-info';

import ListItem from '../../components/ListItem';
import ScreenWrapper from '../../components/ScreenWrapper';

function Settings({ onChangeTheme, onWhy }) {
  return (
    <ScreenWrapper title="Settings">
      <ListItem onPress={onChangeTheme}>Change theme</ListItem>
      <ListItem onPress={onWhy}>Why</ListItem>
      <ListItem>
        <Link href="https://github.com/penghuili/DeathReminder">Source code</Link>
      </ListItem>
      <ListItem>
        <Text>
          v{DeviceInfo.getVersion()}({DeviceInfo.getBuildNumber()})
        </Text>
      </ListItem>
    </ScreenWrapper>
  );
}

export default Settings;
