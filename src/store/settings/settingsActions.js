export const settingsActionTypes = {
  SET_THEME: 'settings/SET_THEME',
  BACK: 'settings/BACK',
  NAV_TO_CHANGE_THEME_PRESSED: 'settings/NAV_TO_CHANGE_THEME_PRESSED',
  CHANGE_THEME_PRESSED: 'settings/CHANGE_THEME_PRESSED',
  NAV_TO_WHY_PRESSED: 'settings/NAV_TO_WHY_PRESSED',
};

export const settingsActionCreators = {
  setTheme(colorMode) {
    return { type: settingsActionTypes.SET_THEME, payload: { colorMode } };
  },
  back() {
    return { type: settingsActionTypes.BACK };
  },
  navToChangeThemePressed() {
    return { type: settingsActionTypes.NAV_TO_CHANGE_THEME_PRESSED };
  },
  changeThemePressed(colorMode) {
    return { type: settingsActionTypes.CHANGE_THEME_PRESSED, payload: { colorMode } };
  },
  navToWhyPressed() {
    return { type: settingsActionTypes.NAV_TO_WHY_PRESSED };
  },
};
