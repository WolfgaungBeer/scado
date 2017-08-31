import React, { PureComponent } from 'react';
import { string, bool, object, func, node } from 'prop-types';
import { AnimationWrapper } from './styled';

const propTypes = {
    id: string.isRequired,
    hideOnMount: bool,
    animationData: object.isRequired,
    remove: func.isRequired,
    children: node
};

const defaultProps = {
    hideOnMount: undefined,
    children: undefined,
};

class Animation extends PureComponent {

    constructor(props) {
        super(props);
        this.state = { visible: !props.hideOnMount };
    }

    componentWillReceiveProps(nextProps) {
        const { animationData, remove } = nextProps;
        const { visible } = this.state;
        const { type } = animationData;
        const div = this.animationContainer;

        if (!div && type && type === 'enter') {
            this.setState({ visible: true });
        }

        if (div && type && type === 'leave') {
            div.addEventListener('animationend', () => {
                remove();
                this.setState({ visible: false });
            }, false);
        }
    }

    render() {
        const { hideOnMount, animationData, children } = this.props;
        const { visible } = this.state;
        const { className } = animationData;

        if (!visible) {
            return (null);
        }

        return (
            <AnimationWrapper innerRef={(div) => { this.animationContainer = div; }} className={className}>
                {children}
            </AnimationWrapper>
        );
    }

}

Animation.propTypes = propTypes;
Animation.defaultProps = defaultProps;

export default Animation;
