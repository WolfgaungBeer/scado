import React from 'react';
import { string, object } from 'prop-types';
import { withTheme } from 'styled-components';

const propTypes = {
    icon: string.isRequired,
    color: string,
    scale: string,
    theme: object.isRequired
};

const defaultProps = {
    color: undefined,
    scale: undefined
};

const Icon = ({ icon, color, scale, theme }) => {

    const themeColor = theme.color[color] || 'inherit';
    const themeScale = theme.scale[scale] || 'inherit';

    const style = {
        color: themeColor,
        fontSize: themeScale,
        transform: 'translateY(15%)'
    };

    return (<i className="material-icons" style={style}>{icon}</i>);
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default withTheme(Icon);
