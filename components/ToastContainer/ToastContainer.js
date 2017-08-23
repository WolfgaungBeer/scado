import React from 'react';
import { array, func, string } from 'prop-types';
import { ToastContainerWrapper } from './styled';
import Toast from './Toast';

const propTypes = {
    toasts: array.isRequired,
    dismissToast: func.isRequired,
    position: string
};

const defaultProps = {
    position: 'bottom-right'
};

const ToastContainer = ({ toasts, dismissToast, position }) => {
    const posArray = position.split(/[-]/);

    toasts.forEach((toast) => {
        const { id, dismissTimeout } = toast;
        setTimeout(() => dismissToast(id), dismissTimeout);

    });

    if (!toasts || toasts.length === 0) {
        return null;
    }

    return (
        <ToastContainerWrapper pos1={posArray[0]} pos2={posArray[1]}>
            {toasts.map(t => <Toast key={t.id} type={t.type} component={t.component} onClose={() => dismissToast(t.id)} />)}
        </ToastContainerWrapper>
    );
};

ToastContainer.propTypes = propTypes;
ToastContainer.defaultProps = defaultProps;

export default ToastContainer;
