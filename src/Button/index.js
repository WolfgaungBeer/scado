import React from 'react';
import { node, func, oneOf, string, bool } from 'prop-types';
import { StyledButton } from './styled';

const propTypes = {
    type: oneOf(['submit', 'button']),
    buttonType: oneOf(['flat', 'raised', 'border']),
    disabled: bool,
    color: string,
    scale: string,
    children: node,
    onClick: func,
};

const defaultProps = {
    type: undefined,
    buttonType: undefined,
    disabled: undefined,
    color: undefined,
    scale: undefined,
    children: undefined,
    onClick: undefined,
};

const Button = ({ type, buttonType, disabled, color, scale, children, onClick }) => (
    <StyledButton type={type} buttonType={buttonType} disabled={disabled} color={color} scale={scale} onClick={onClick}>
        {children}
    </StyledButton>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
