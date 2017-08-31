import React from 'react';
import { string, node, number, func } from 'prop-types';
import { ToastWrapper, IconWrapper, ComponentWrapper, CloseButtonWrapper, AbsoluteWrapper } from './styled';
import iconMap from './iconMap';
import Animation from '../Animation';
import Icon from '../Icon';
import Flex from '../Flex';
import Button from '../Button';

const propTypes = {
    id: string.isRequired,
    type: string.isRequired,
    component: node.isRequired,
    onClose: func.isRequired,
};

const defaultProps = {};

const Toast = ({ id, type, component, onClose }) => {
    return (
        <Animation id={id}>
            <ToastWrapper>
                <IconWrapper flex="0 1 15%" justifyContent="center" alignItems="center" color={type}>
                    <Icon icon={iconMap[type]} color="white" scale="l" />
                </IconWrapper>
                <ComponentWrapper flex="0 1 80%" justifyContent="center" alignItems="center">
                    {component}
                </ComponentWrapper>
                <CloseButtonWrapper flex="0 1 5%" justifyContent="center" alignItems="center">
                    <AbsoluteWrapper>
                        <Button type="flat" icon="close" color="black" scale="m" onClick={onClose} />
                    </AbsoluteWrapper>
                </CloseButtonWrapper>
            </ToastWrapper>
        </Animation>
    );
};

Toast.propTypes = propTypes;
Toast.defaultProps = defaultProps;

export default Toast;
