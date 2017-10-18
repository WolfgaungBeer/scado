import { css } from 'styled-components';

export const getButtonType = (props) => {
    const { flat, raised, border } = props;
    let type;
    if (flat) type = 'flat';
    if (raised) type = 'raised';
    if (border) type = 'border';
    return type;
};

export const getBackgroundColor = () => (props) => {
    const type = getButtonType(props);
    switch (type) {
    case 'flat':
    case 'border':
        return 'transparent';
    case 'raised':
        return props.color ? props.theme.color[props.color] : props.theme.color.primary;
    default:
        return props.color ? props.theme.color[props.color] : props.theme.color.primary;
    }
};

export const getBorder = () => (props) => {
    const type = getButtonType(props);
    switch (type) {
    case 'flat':
        return 'border-style: none';
    case 'border':
        return css`
            border-style: solid;
            border-width: 1px;
            border-color: ${props.color ? props.theme.color[props.color] : props.theme.color.black};
            border-radius: 2px;
        `;
    case 'raised':
        return css`
            border-style: solid;
            border-width: 1px;
            border-color: ${props.color ? props.theme.color[props.color] : props.theme.color.primary};
            border-radius: 2px;
        `;
    default:
        return css`
            border-style: none;
            border-radius: 2px;
        `;
    }
};

export const getShadow = () => (props) => {
    const type = getButtonType(props);
    switch (type) {
    case 'raised':
        return 'box-shadow: 2px 2px 7px 0px rgba(87,87,87,0.7);';
    default:
        return undefined;
    }
};

export const getFontColor = () => (props) => {
    const type = getButtonType(props);
    switch (type) {
    case 'flat':
    case 'border':
        return props.theme.color[props.color];
    default:
        return props.theme.color.white;
    }
};
