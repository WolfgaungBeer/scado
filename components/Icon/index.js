import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import './style.css';


const propTypes = {
    icon: string.isRequired,
    color: string,
    scale: string,
    className: string,
};

const defaultProps = {
    color: undefined,
    scale: undefined,
    className: undefined,
};

const StyledIcon = styled.i`
    color: ${props => props.theme.color[props.color] || 'inherit'};
    font-size: ${props => props.theme.scale[props.scale] || 'inherit'};
`;

const Icon = ({ icon, color, scale, className }) => {
    return (<StyledIcon className={`material-icons ${className || ''}`} color={color} scale={scale}>{icon}</StyledIcon>);
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
