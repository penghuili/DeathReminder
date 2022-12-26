import { Appearance } from 'react-native';

import { settingsActionTypes } from './settingsActions';

const initialState = {
  colorMode: Appearance.getColorScheme() || 'dark',
};

function handleSetTheme(state, { colorMode }) {
  return { ...state, colorMode };
}

export function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case settingsActionTypes.SET_THEME:
      return handleSetTheme(state, action.payload);

    default:
      return state;
  }
}
