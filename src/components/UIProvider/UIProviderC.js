import { connect } from 'react-redux';

import { settingsSelectors } from '../../store/settings/settingsSelectors';
import UIProvider from './UIProvider';

const mapStateToProps = state => ({
  colorMode: settingsSelectors.getColorMode(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UIProvider);
