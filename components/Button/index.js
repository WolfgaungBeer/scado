import React from 'react';
import { string, bool, func, node } from 'prop-types';
import StyledButton from './StyledButton';
import Icon from '../Icon';

const propTypes = {
    type: string,
    color: string,
    scale: string,
    icon: string,
    border: bool,
    onClick: func,
    children: node
};

const defaultProps = {
    type: undefined,
    color: undefined,
    scale: undefined,
    icon: undefined,
    border: undefined,
    onClick: undefined,
    children: undefined
};

const Button = ({ type, color, scale, icon, border, onClick, children }) => {

    const fontColor = type ? 'white' : color;
    const borderColor = (border && color) ? color : 'darkGray';
    const iconPadding = children ? '0.25rem' : undefined;

    return (
        <StyledButton
            type={type}
            color={fontColor}
            scale={scale}
            border={border}
            borderColor={borderColor}
            iconPadding={iconPadding}
            onClick={onClick}
        >
            <div>
                {icon && <Icon icon={icon} color={fontColor} scale={scale} />}
                {children}
            </div>
        </StyledButton>
    );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
