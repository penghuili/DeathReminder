import { connect } from 'react-redux';
import { profileActionCreators } from '../../store/profile/profileActions';

import Intro from './Intro';

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  onNext: profileActionCreators.introNextPressed,
};

export default connect(mapStateToProps, mapDispatchToProps)(Intro);
