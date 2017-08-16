import React from 'react';
import { string, func, node } from 'prop-types';
import StyledButton from './StyledButton';
import { getIconColor } from './helpers';
import Icon from '../Icon';


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

    const buttonType = type || 'default';
    const iconColor = getIconColor(type, color);
    const iconOnly = (icon && !children);

    return (
        <StyledButton type={buttonType} color={color} scale={scale} iconOnly={iconOnly} onClick={onClick}>
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
