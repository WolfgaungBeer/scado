import React from 'react';
import { string, node, func } from 'prop-types';
import { ToastWrapper, IconWrapper, ComponentWrapper, CloseButtonWrapper, AbsoluteWrapper } from './styled';
import iconMap from './iconMap';
import Animation from '../Animation';
import Icon from '../Icon';
import IconButton from '../IconButton';

const propTypes = {
    id: string.isRequired,
    type: string.isRequired,
    content: node.isRequired,
    onClose: func.isRequired,
};

const defaultProps = {};

const Toast = ({ id, type, content, onClose }) => (
    <Animation id={id}>
        <ToastWrapper>
            <IconWrapper flex="0 1 15%" justifyContent="center" alignItems="center" color={type}>
                <Icon icon={iconMap[type]} color="white" scale="l" />
            </IconWrapper>
            <ComponentWrapper flex="0 1 80%" justifyContent="center" alignItems="center">
                {content}
            </ComponentWrapper>
            <CloseButtonWrapper flex="0 1 5%" justifyContent="center" alignItems="center">
                <AbsoluteWrapper>
                    <IconButton icon="close" onClick={onClose} />
                </AbsoluteWrapper>
            </CloseButtonWrapper>
        </ToastWrapper>
    </Animation>
);

Toast.propTypes = propTypes;
Toast.defaultProps = defaultProps;

export default Toast;
