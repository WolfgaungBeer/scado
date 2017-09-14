import React from 'react';
import { string, bool, func } from 'prop-types';
import { StyledButton } from './styled';
import Icon from '../Icon';

const propTypes = {
    icon: string.isRequired,
    color: string,
    scale: string,
    loading: bool,
    onClick: func.isRequired,
};

const defaultProps = {
    color: undefined,
    scale: undefined,
    loading: undefined,
};

const IconButton = ({ icon, color, scale, loading, onClick }) => (
    <StyledButton onClick={onClick}>
        <Icon icon={icon} color={color} scale={scale} loading={loading} />
    </StyledButton>
);

IconButton.propTypes = propTypes;
IconButton.defaultProps = defaultProps;

export default IconButton;
