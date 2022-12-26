import { Radio } from 'native-base';
import React from 'react';

import ScreenWrapper from '../../components/ScreenWrapper';

function ChangeTheme({ colorMode, onChange }) {
  return (
    <ScreenWrapper hasBack title="Change theme">
      <Radio.Group name="changeTheme" value={colorMode} onChange={onChange}>
        <Radio value="dark" mb="2">
          Dark mode
        </Radio>
        <Radio value="light">Light mode</Radio>
      </Radio.Group>
    </ScreenWrapper>
  );
}

export default ChangeTheme;
