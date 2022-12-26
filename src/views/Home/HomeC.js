import { connect } from 'react-redux';
import { notificationsActionCreators } from '../../store/notifications/notificationsActions';

import { notificationsSelectors } from '../../store/notifications/notificationsSelectors';
import { profileActionCreators } from '../../store/profile/profileActions';
import { profileSelectors } from '../../store/profile/profileSelectors';
import Home from './Home';

const mapStateToProps = state => ({
  birthday: profileSelectors.getBirthday(state),
  expectedAge: profileSelectors.getExpectedAge(state),
  notification: notificationsSelectors.getNotification(state),
});

const mapDispatchToProps = {
  onUpdateProfile: profileActionCreators.updatePressed,
  onAddNotification: notificationsActionCreators.navToAddPressed,
  onUpdateNotification: notificationsActionCreators.navToUpdatePressed,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
