import React from 'react';
import { string, func, node } from 'prop-types';
import StyledButton from './StyledButton';


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
    return (
        <StyledButton onClick={onClick}>
            <div>{children}</div>
        </StyledButton>
    );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
