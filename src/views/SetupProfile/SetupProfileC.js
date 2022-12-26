import { connect } from 'react-redux';
import { profileActionCreators } from '../../store/profile/profileActions';

import SetupProfile from './SetupProfile';

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  onFinish: profileActionCreators.finishSetupPressed,
};

export default connect(mapStateToProps, mapDispatchToProps)(SetupProfile);
