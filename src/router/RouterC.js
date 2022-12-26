import { connect } from 'react-redux';
import { profileSelectors } from '../store/profile/profileSelectors';

import Router from './Router';

const mapStateToProps = state => ({
  isLoadingProfile: profileSelectors.isLoading(state),
  hasFinishedSetup:
    !!profileSelectors.getBirthday(state) && !!profileSelectors.getExpectedAge(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
