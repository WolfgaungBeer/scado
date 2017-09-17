import React from 'react';
import { node, func, oneOf, string } from 'prop-types';
import { StyledButton } from './styled';

const propTypes = {
    type: oneOf(['flat', 'raised', 'border']),
    color: string,
    scale: string,
    children: node.isRequired,
    onClick: func.isRequired,
};

const defaultProps = {
    type: undefined,
    color: undefined,
    scale: undefined,
};

const Button = ({ type, color, scale, children, onClick }) => (
    <StyledButton type={type} color={color} scale={scale} onClick={onClick}>{children}</StyledButton>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
