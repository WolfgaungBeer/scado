import React from 'react';
import { node, func, oneOf, string, bool } from 'prop-types';
import { StyledButton } from './styled';

const propTypes = {
    type: oneOf(['submit', 'button']),
    flat: bool,
    raised: bool,
    border: bool,
    disabled: bool,
    color: string,
    scale: string,
    className: string,
    children: node,
    onClick: func,
};

const defaultProps = {
    type: undefined,
    flat: undefined,
    raised: undefined,
    border: undefined,
    disabled: undefined,
    color: undefined,
    scale: undefined,
    className: undefined,
    children: undefined,
    onClick: undefined,
};

const Button = ({ type, flat, raised, border, disabled, color, scale, className, children, onClick }) => (
    <StyledButton
        type={type}
        flat={flat}
        raised={raised}
        border={border}
        disabled={disabled}
        color={color}
        scale={scale}
        className={className}
        onClick={onClick}
    >
        {children}
    </StyledButton>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
