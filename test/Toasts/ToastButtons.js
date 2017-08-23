import React from 'react';
import { connect } from 'react-redux';
import { toastActions, Button } from '../../scado';

const ExampleComponent = () => (<div>Das ist ein Test, test <Button type="flat" color="success" onClick={() => alert('OK')}>OK</Button> </div>);

const mapDispatchToProps = (dispatch) => {
    return {
        showToast: (type, component, dismissTimeout) => dispatch(toastActions.showToast({ type, component, dismissTimeout }))
    };
};

const ToastButtons = ({ showToast }) => {
    return (
        <div>
            <button onClick={() => showToast('success', <ExampleComponent />, 5000)}>Success Toast</button>
            <button onClick={() => showToast('error', 'das ist ein error', 30000)}>Error Toast</button>
            <button onClick={() => showToast('info', 'das ist eine info', 5000)}>Info Toast</button>
            <button onClick={() => showToast('warning', 'das ist eine warnung', 10000)}>Warning Toast</button>
        </div>
    );
};

export default connect(null, mapDispatchToProps)(ToastButtons);