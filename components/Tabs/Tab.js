import React from 'react';
import { bool, func, node } from 'prop-types';
import { StyledTab } from './styled';


const propTypes = {
    active: bool,
    onClick: func,
    children: node,
};

const defaultProps = {
    active: undefined,
    onClick: undefined,
    children: undefined,
};

const Tab = ({ active, onClick, children }) => (
    <StyledTab active={active} onClick={onClick}>
        {children}
    </StyledTab>
);

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

export default Tab;
