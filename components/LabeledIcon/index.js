import React from 'react';
import { string, node, bool } from 'prop-types';
import { StyledLabeledIcon, StyledText } from './styled';
import Icon from '../Icon';


const propTypes = {
    icon: string.isRequired,
    label: node.isRequired,
    color: string,
    scale: string,
    loading: bool,
    invert: bool,
};

const defaultProps = {
    color: undefined,
    scale: undefined,
    loading: undefined,
    invert: undefined,
};

const LabeledIcon = ({ icon, label, color, scale, loading, invert }) => {
    const left = invert ? <StyledText invert={invert}>{label}</StyledText> : <Icon icon={icon} loading={loading} />;
    const right = invert ? <Icon icon={icon} loading={loading} /> : <StyledText invert={invert}>{label}</StyledText>;
    return (
        <StyledLabeledIcon color={color} scale={scale}>
            {left}
            {right}
        </StyledLabeledIcon>
    );
};

LabeledIcon.propTypes = propTypes;
LabeledIcon.defaultProps = defaultProps;

export default LabeledIcon;
