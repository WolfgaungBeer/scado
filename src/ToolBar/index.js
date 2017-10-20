import React from 'react';
import { string, node } from 'prop-types';
import { StyledToolBar, ChildrenWrapper } from './styled';


const propTypes = {
    className: string,
    children: node,
    actionButtons: node,
};

const defaultProps = {
    className: undefined,
    children: undefined,
    actionButtons: undefined,
};

const ToolBar = ({ className, children, actionButtons }) => (
    <StyledToolBar alignItems="center" justifyContent="space-between" className={className}>
        <ChildrenWrapper alignItems="center">{children}</ChildrenWrapper>
        {actionButtons && <ChildrenWrapper alignItems="center">{actionButtons}</ChildrenWrapper>}
    </StyledToolBar>
);

ToolBar.propTypes = propTypes;
ToolBar.defaultProps = defaultProps;

export default ToolBar;
