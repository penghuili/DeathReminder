import { connect } from 'react-redux';

import { notificationsActionCreators } from '../../store/notifications/notificationsActions';
import AddNotification from './AddNotification';

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  onSave: notificationsActionCreators.addPressed,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNotification);
