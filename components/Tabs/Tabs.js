import React from 'react';
import { node } from 'prop-types';
import { StyledTabs } from './styled';

const propTypes = {
    children: node,
};

const defaultProps = {
    children: undefined,
};

const Tabs = ({ children }) => (
    <StyledTabs justifyContent="center" alignItems="center">
        {children}
    </StyledTabs>
);

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;

export default Tabs;
