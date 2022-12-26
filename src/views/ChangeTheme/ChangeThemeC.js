import { connect } from 'react-redux';

import { settingsActionCreators } from '../../store/settings/settingsActions';
import { settingsSelectors } from '../../store/settings/settingsSelectors';
import ChangeTheme from './ChangeTheme';

const mapStateToProps = state => ({ colorMode: settingsSelectors.getColorMode(state) });

const mapDispatchToProps = {
  onChange: settingsActionCreators.changeThemePressed,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeTheme);
