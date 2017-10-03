import React from 'react';
import { string, bool, func } from 'prop-types';
import { StyledIcon } from './styled';

const propTypes = {
    icon: string.isRequired,
    color: string,
    scale: string,
    className: string,
    loading: bool,
    onClick: func,
};

const defaultProps = {
    color: undefined,
    scale: undefined,
    className: undefined,
    loading: undefined,
    onClick: undefined,
};

const Icon = ({ icon, color, scale, className, loading, onClick }) => {
    const classname = `material-icons ${className || ''}`;
    const iconValue = loading ? 'autorenew' : icon;
    return (
        <StyledIcon className={classname} color={color} scale={scale} loading={loading} onClick={onClick}>
            {iconValue}
        </StyledIcon>
    );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
