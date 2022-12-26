export const profileSelectors = {
  getBirthday: state => state.profile.birthday,
  getExpectedAge: state => state.profile.expectedAge,
  isLoading: state => state.profile.isLoading,
};
