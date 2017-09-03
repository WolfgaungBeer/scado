import React, { Children, cloneElement } from 'react';
import { string, node } from 'prop-types';
import Flex from '../../Flex';

const propTypes = {
    gutter: string,
    children: node
};

const defaultProps = {
    gutter: undefined,
    children: undefined
};

const Row = ({ gutter, children }) => {
    return (
        <Flex justifyContent="space-between">
            {gutter ? Children.map(children, (child) => cloneElement(child, { gutter })) : children}
        </Flex>
    );
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
