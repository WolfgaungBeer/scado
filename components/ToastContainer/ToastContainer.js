import React, { PureComponent } from 'react';
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

class ToastContainer extends PureComponent {

    componentWillReceiveProps(nextProps) {
        const { toasts, dismissToast } = nextProps;

        if (toasts && toasts.length > 0) {
            const oldToastIds = this.props.toasts.map(t => t.id);
            const newToasts = toasts.map(t => oldToastIds.includes(t.id) ? undefined : t).filter(t => t !== undefined);
            newToasts.forEach(t => setTimeout(() => dismissToast(t.id), t.dismissTimeout));
        }

    }

    render() {
        const { position, toasts, dismissToast } = this.props;
        const posArray = position.split(/[-]/);

        if (!toasts || toasts.length === 0) {
            return null;
        }

        return (
            <ToastContainerWrapper pos1={posArray[0]} pos2={posArray[1]}>
                {toasts.map(t =>
                    <Toast key={t.id} id={t.id} type={t.type} component={t.component} onClose={() => dismissToast(t.id)} />
                )}
            </ToastContainerWrapper>
        );
    }
}

ToastContainer.propTypes = propTypes;
ToastContainer.defaultProps = defaultProps;

export default ToastContainer;
