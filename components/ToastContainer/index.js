import { connect } from 'react-redux';
import * as toastSelectors from './selectors';
import * as toastActions from './actions';
import ToastContainer from './ToastContainer';

const mapStateToProps = (state) => {
    return {
        toasts: toastSelectors.toasts(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dismissToast: (id) => dispatch(toastActions.dismissToast({ id }))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToastContainer);
