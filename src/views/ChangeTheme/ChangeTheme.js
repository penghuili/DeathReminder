import { Box, Radio } from 'native-base';
import React from 'react';

import ScreenWrapper from '../../components/ScreenWrapper';

function ChangeTheme({ colorMode, onChange }) {
  return (
    <ScreenWrapper hasBack title="Change theme">
      <Radio.Group name="changeTheme" value={colorMode} onChange={onChange}>
        <Box mb="2">
          <Radio value="dark">Dark mode</Radio>
        </Box>
        <Box mb="2">
          <Radio value="light">Light mode</Radio>
        </Box>
      </Radio.Group>
    </ScreenWrapper>
  );
}

export default ChangeTheme;
