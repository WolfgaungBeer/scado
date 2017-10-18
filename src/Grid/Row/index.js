import React, { Children, cloneElement } from 'react';
import { string, node } from 'prop-types';

const propTypes = {
    gutter: string,
    children: node,
};

const defaultProps = {
    gutter: undefined,
    children: undefined,
};

const Row = ({ gutter, children }) => {
    const gutters = gutter ? gutter.split(/ /) : [];
    return (
        <div>
            {gutter ? Children.map(children, child =>
                cloneElement(child, { gutterV: gutters[0], gutterH: gutters[1] }),
            ) : children}
        </div>
    );
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
