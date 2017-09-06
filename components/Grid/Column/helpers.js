import { css } from 'styled-components';

const delta = 100 / 12;

export const getBreakpoint = (size) => (props) => {
    return props.theme.screen[size];
}

export const getWidth = (size) => (props) => {
    return css`${delta * props[size]}%`;
}
