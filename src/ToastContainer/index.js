import { connect } from 'react-redux';
import { toasts } from './selectors';
import toastActions from './actions';
import ToastContainer from './ToastContainer';

const mapStateToProps = state => ({
    toasts: toasts(state),
});

const mapDispatchToProps = dispatch => ({
    dismissToast: id => dispatch(toastActions.dismissToast(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToastContainer);
