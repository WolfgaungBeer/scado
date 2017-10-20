export const textStyle = () => props => `
    color: ${props.theme.color[props.color]};
    font-size: ${props.theme.scale[props.scale]};
`;

export const font = type => props => `
    font-family: ${props.theme.fonts[type]};
`;
