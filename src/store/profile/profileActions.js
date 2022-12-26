export const profileActionTypes = {
  SET_BIRTHDAY: 'profile/SET_BIRTHDAY',
  SET_EXPECTED_AGE: 'profile/SET_EXPECTED_AGE',
  SET_PROFILE: 'profile/SET_PROFILE',
  SET_IS_LOADING: 'profile/SET_IS_LOADING',
  VIEW_ENTERED: 'profile/VIEW_ENTERED',
  INTRO_NEXT_PRESSED: 'profile/INTRO_NEXT_PRESSED',
  UPDATE_PRESSED: 'profile/UPDATE_PRESSED',
  FINISH_SETUP_PRESSED: 'profile/FINISH_SETUP_PRESSED',
  DELETE_PRESSED: 'profile/DELETE_PRESSED',
};

export const profileActionCreators = {
  setBirthday(birthday) {
    return { type: profileActionTypes.SET_BIRTHDAY, payload: { birthday } };
  },
  setExpectedAge(expectedAge) {
    return { type: profileActionTypes.SET_EXPECTED_AGE, payload: { expectedAge } };
  },
  setProfile({ birthday, expectedAge }) {
    return { type: profileActionTypes.SET_PROFILE, payload: { birthday, expectedAge } };
  },
  setIsLoading(isLoading) {
    return { type: profileActionTypes.SET_IS_LOADING, payload: { isLoading } };
  },
  viewEntered() {
    return { type: profileActionTypes.VIEW_ENTERED };
  },
  introNextPressed() {
    return { type: profileActionTypes.INTRO_NEXT_PRESSED };
  },
  updatePressed() {
    return { type: profileActionTypes.UPDATE_PRESSED };
  },
  finishSetupPressed(birthday, expectedAge) {
    return { type: profileActionTypes.FINISH_SETUP_PRESSED, payload: { birthday, expectedAge } };
  },
  deletePressed() {
    return { type: profileActionTypes.DELETE_PRESSED };
  },
};
