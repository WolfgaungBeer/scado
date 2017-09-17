import { css } from 'styled-components';

export const getBackgroundColor = () => (props) => {
    const type = props.type || '';
    switch (type) {
    case 'flat':
    case 'border':
        return 'transparent';
    case 'raised':
        return props.color ? props.theme.color[props.color] : props.theme.color.lightGray;
    default:
        return props.color ? props.theme.color[props.color] : props.theme.color.lightGray;
    }
};

export const getBorder = () => (props) => {
    const type = props.type || '';
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
            border-color: ${props.color ? props.theme.color[props.color] : props.theme.color.lightGray};
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
    const type = props.type || '';
    switch (type) {
    case 'raised':
        return 'box-shadow: 2px 2px 7px 0px rgba(87,87,87,0.7);';
    default:
        return undefined;
    }
};

export const getFontColor = () => (props) => {
    const type = props.type || '';
    switch (type) {
    case 'flat':
    case 'border':
        return css`
            color: ${props.color ? props.theme.color[props.color] : undefined};
        `;
    default:
        return css`
            color: ${props.color ? props.theme.color.white : undefined};
        `;
    }
};
