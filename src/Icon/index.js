import React from 'react';
import { string, bool, func, node } from 'prop-types';
import { StyledIcon } from './styled';

const propTypes = {
    color: string,
    scale: string,
    className: string,
    loading: bool,
    onClick: func,
    children: node,
};

const defaultProps = {
    color: undefined,
    scale: undefined,
    className: undefined,
    loading: undefined,
    onClick: undefined,
    children: undefined,
};

const Icon = ({ color, scale, className, loading, onClick, children }) => {
    const classname = `material-icons ${className || ''}`;
    const iconValue = loading ? 'autorenew' : children;
    return (
        <StyledIcon className={classname} color={color} scale={scale} loading={loading} onClick={onClick}>
            {iconValue}
        </StyledIcon>
    );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
