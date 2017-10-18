export const getStyle = () => (props) => {
    const { scale, left, bottom, right } = props;
    let pos = 'top';
    if (left) pos = 'left';
    if (bottom) pos = 'bottom';
    if (right) pos = 'right';
    return `padding-${pos}: ${props.theme.scale[scale] || props.theme.scale.m};`;
};
