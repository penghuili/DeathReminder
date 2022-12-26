import { connect } from 'react-redux';
import { profileActionCreators } from '../../store/profile/profileActions';
import { profileSelectors } from '../../store/profile/profileSelectors';

import SetupProfile from './SetupProfile';

const mapStateToProps = state => ({
  birthday: profileSelectors.getBirthday(state),
  expectedAge: profileSelectors.getExpectedAge(state),
});

const mapDispatchToProps = {
  onFinish: profileActionCreators.finishSetupPressed,
  onDelete: profileActionCreators.deletePressed,
};

export default connect(mapStateToProps, mapDispatchToProps)(SetupProfile);
