import React from 'react';
import { node } from 'prop-types';
import { StyledToolBar, ChildrenWrapper } from './styled';


const propTypes = {
    children: node,
    actionButtons: node,
};

const defaultProps = {
    children: undefined,
    actionButtons: undefined,
};

const ToolBar = ({ children, actionButtons }) => (
    <StyledToolBar alignItems="center" justifyContent="space-between">
        <ChildrenWrapper alignItems="center">{children}</ChildrenWrapper>
        {actionButtons && <ChildrenWrapper alignItems="center">{actionButtons}</ChildrenWrapper>}
    </StyledToolBar>
);

ToolBar.propTypes = propTypes;
ToolBar.defaultProps = defaultProps;

export default ToolBar;
