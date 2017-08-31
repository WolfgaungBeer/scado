import { connect } from 'react-redux';
import { toasts } from './selectors';
import { dismissToast } from './actions';
import ToastContainer from './ToastContainer';

const mapStateToProps = (state) => {
    return {
        toasts: toasts(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dismissToast: (id) => dispatch(dismissToast(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToastContainer);
