import React, { PureComponent } from 'react';
import { bool, shape, string, func, node } from 'prop-types';
import { AnimationWrapper } from './styled';

const propTypes = {
    hideOnMount: bool,
    inline: bool,
    animationData: shape({
        type: string,
        className: string,
    }).isRequired,
    remove: func.isRequired,
    children: node,
};

const defaultProps = {
    hideOnMount: undefined,
    inline: undefined,
    children: undefined,
};

class Animation extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { visible: !props.hideOnMount };
    }

    componentWillReceiveProps(nextProps) {
        const { animationData, remove } = nextProps;
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
        const { inline, animationData, children } = this.props;
        const { visible } = this.state;
        const { className } = animationData;

        if (!visible) {
            return (null);
        }

        return (
            <AnimationWrapper
                innerRef={(div) => { this.animationContainer = div; }}
                className={className}
                inline={inline}
            >
                {children}
            </AnimationWrapper>
        );
    }
}

Animation.propTypes = propTypes;
Animation.defaultProps = defaultProps;

export default Animation;
