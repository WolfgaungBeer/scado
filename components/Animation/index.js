import { connect } from 'react-redux';
import * as animationSelectors from './selectors';
import * as animationActions from './actions';
import Animation from './Animation';

const mapStateToProps = (state, ownProps) => {
    return {
        animationData: animationSelectors.animationData(state, ownProps.id)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setClassName: (id, className) => dispatch(animationActions.setClassName({ id, className }))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Animation);
