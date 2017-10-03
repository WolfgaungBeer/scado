import React from 'react';
import { string, bool } from 'prop-types';
import { StyledIcon } from './styled';

const propTypes = {
    icon: string.isRequired,
    color: string,
    scale: string,
    className: string,
    loading: bool,
};

const defaultProps = {
    color: undefined,
    scale: undefined,
    className: undefined,
    loading: undefined,
};

const Icon = ({ icon, color, scale, className, loading }) => {
    const classname = `material-icons ${className || ''}`;
    const iconValue = loading ? 'autorenew' : icon;
    return (
        <StyledIcon className={classname} color={color} scale={scale} loading={loading}>
            {iconValue}
        </StyledIcon>
    );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
