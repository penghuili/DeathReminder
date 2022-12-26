import { connect } from 'react-redux';

import { settingsActionCreators } from '../../store/settings/settingsActions';
import Settings from './Settings';

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  onChangeTheme: settingsActionCreators.navToChangeThemePressed,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
