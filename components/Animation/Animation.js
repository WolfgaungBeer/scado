import React, { PureComponent } from 'react';
import { object, func, string, bool, node } from 'prop-types';
import styled from 'styled-components';

const propTypes = {
    animationData: object.isRequired,
    setClassName: func.isRequired,
    id: string.isRequired,
    hideOnMount: bool,
    children: node
};

const defaultProps = {
    hideOnMount: undefined,
    children: undefined
};


class Animation extends PureComponent {

    constructor(props) {
        super(props);
        this.state = { visible: !this.props.hideOnMount };
    }

    componentWillReceiveProps(nextProps) {
        const { animationData, setClassName } = nextProps;
        const { id, type } = animationData;
        const animationType = type || 'animation';
        const div = this.animationDivRef;

        if (animationType === 'enter') {

            this.setState({ visible: true });

        } else if (animationType === 'leave') {

            if (div) {
                div.addEventListener('animationend', () => {
                    this.setState({ visible: false });
                }, false);
            }

        } else if (animationType === 'animation') {

            if (div) {
                div.addEventListener('animationend', () => {
                    setClassName(id, undefined);
                }, false);
            }

        }

    }

    render() {
        const { animationData, children } = this.props;
        const { visible } = this.state;
        const { className } = animationData;

        if (!visible) {
            return null;
        }

        return (
            <AnimationWrapper className={className} innerRef={(div) => { this.animationDivRef = div; }}>
                {children}
            </AnimationWrapper>
        );
    }
}

const AnimationWrapper = styled.div`
    display: inline-block;
`;

Animation.propTypes = propTypes;
Animation.defaultProps = defaultProps;

export default Animation;
