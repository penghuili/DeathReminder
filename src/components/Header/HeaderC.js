import { connect } from 'react-redux';

import { settingsActionCreators } from '../../store/settings/settingsActions';
import Header from './Header';

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  onBack: settingsActionCreators.back,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
