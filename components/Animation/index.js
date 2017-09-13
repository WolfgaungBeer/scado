import { connect } from 'react-redux';
import { animationData } from './selectors';
import animationActions from './actions';
import Animation from './Animation';
import './defaultAnimations.css';

const mapStateToProps = (state, ownProps) => ({
    animationData: animationData(state, ownProps.id),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    remove: () => dispatch(animationActions.remove(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Animation);
