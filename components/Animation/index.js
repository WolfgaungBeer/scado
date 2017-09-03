import { connect } from 'react-redux';
import { animationData } from './selectors';
import { remove } from './actions';
import Animation from './Animation';
import './defaultAnimations.css';

const mapStateToProps = (state, ownProps) => {
    return {
        animationData: animationData(state, ownProps.id)
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        remove: () => dispatch(remove(ownProps.id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Animation);
