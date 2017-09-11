import { css } from 'styled-components';

const delta = 100 / 12;

export const getBreakpoint = size => props => props.theme.screen[size];

export const getWidth = size => props => css`${delta * props[size]}%`;
