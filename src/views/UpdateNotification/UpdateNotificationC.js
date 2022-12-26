import { connect } from 'react-redux';

import { notificationsActionCreators } from '../../store/notifications/notificationsActions';
import { notificationsSelectors } from '../../store/notifications/notificationsSelectors';
import UpdateNotification from './UpdateNotification';

const mapStateToProps = state => ({
  notification: notificationsSelectors.getNotification(state),
});

const mapDispatchToProps = {
  onUpdate: notificationsActionCreators.updatePressed,
  onDelete: notificationsActionCreators.deletePressed,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateNotification);
