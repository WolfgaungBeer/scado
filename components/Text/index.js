import React from 'react';
import { string, node } from 'prop-types';
import { StyledText } from './styled';


const propTypes = {
    color: string,
    scale: string,
    children: node,
};

const defaultProps = {
    color: undefined,
    scale: undefined,
    children: undefined,
};

const Text = ({ color, scale, children }) => (
    <StyledText color={color} scale={scale}>
        {children}
    </StyledText>
);

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
