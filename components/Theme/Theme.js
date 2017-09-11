import React from 'react';
import { shape, object, node } from 'prop-types';
import { ThemeProvider } from 'styled-components';

const propTypes = {
    theme: shape({
        screen: object,
        color: object,
        scale: object,
    }).isRequired,
    children: node,
};

const defaultProps = {
    children: undefined,
};

const Theme = ({ theme, children }) => (<ThemeProvider theme={theme}>{children}</ThemeProvider>);

Theme.propTypes = propTypes;
Theme.defaultProps = defaultProps;

export default Theme;
