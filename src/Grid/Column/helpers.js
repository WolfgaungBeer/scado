const delta = 100 / 12;

export const getBreakpoint = size => props => props.theme.screen[size];
export const getWidth = size => props => `${delta * props[size]}%`;
