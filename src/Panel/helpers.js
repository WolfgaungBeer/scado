export const getShadow = () => (props) => {
    if (!props.shadow) return '';
    const shadowValue = props.theme.shadow[props.shadow];
    return `${shadowValue} ${shadowValue} 5px 0px rgba(0,0,0,0.75);`;
};
