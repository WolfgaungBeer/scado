import React from 'react';
import { string, bool, func, node } from 'prop-types';
import StyledButton from './StyledButton';
import Icon from '../Icon';
import { getIconColor } from './helpers';

const propTypes = {
    type: string,
    color: string,
    scale: string,
    icon: string,
    onClick: func,
    children: node
};

const defaultProps = {
    type: undefined,
    color: undefined,
    scale: undefined,
    icon: undefined,
    onClick: undefined,
    children: undefined
};

const Button = ({ type, color, scale, icon, onClick, children }) => {
    const iconPadding = (children && children.length > 0);
    const iconColor = getIconColor(type, color);
    return (
        <StyledButton type={type} color={color} scale={scale} iconPadding={iconPadding} onClick={onClick}>
            <div>
                {icon && <Icon icon={icon} color={iconColor} scale={scale} />}
                {children}
            </div>
        </StyledButton>
    );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
