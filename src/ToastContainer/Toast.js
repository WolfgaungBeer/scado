import React from 'react';
import { string, node, func } from 'prop-types';
import { ToastWrapper, IconWrapper, ComponentWrapper, CloseButtonWrapper, AbsoluteWrapper } from './styled';
import iconMap from './iconMap';
import Icon from '../Icon';

const propTypes = {
    type: string.isRequired,
    content: node.isRequired,
    onClose: func.isRequired,
};

const defaultProps = {};

const Toast = ({ type, content, onClose }) => (
    <ToastWrapper>
        <IconWrapper flex="0 1 15%" justifyContent="center" alignItems="center" color={type}>
            <Icon color="white" scale="l">{iconMap[type]}</Icon>
        </IconWrapper>
        <ComponentWrapper flex="0 1 80%" justifyContent="center" alignItems="center">
            {content}
        </ComponentWrapper>
        <CloseButtonWrapper flex="0 1 5%" justifyContent="center" alignItems="center">
            <AbsoluteWrapper>
                <Icon onClick={onClose}>close</Icon>
            </AbsoluteWrapper>
        </CloseButtonWrapper>
    </ToastWrapper>
);

Toast.propTypes = propTypes;
Toast.defaultProps = defaultProps;

export default Toast;
