export const getBackgroundColor = (props) => {
    const hasType = (props.type !== undefined);
    const isFlatButton = (props.type === 'flat');
    const bgColor = isFlatButton ? 'transparent' : props.theme.color[props.color];
    return hasType ? bgColor : 'transparent';
};

export const getFontColor = (props) => {
    const hasType = (props.type !== undefined);
    const isFlatButton = (props.type === 'flat');
    const fontColor = isFlatButton ? props.theme.color[props.color] : props.theme.color.white;
    return hasType ? fontColor : props.theme.color.black;
};

export const getBorderStyle = (props) => {
    const hasType = (props.type !== undefined);
    const isFlatButton = (props.type === 'flat');
    return (!hasType || isFlatButton) ? 'none' : 'solid';
};

export const getIconColor = (type, color) => {
    const hasType = (type !== undefined);
    const isFlatButton = (type === 'flat');
    const fontColor = isFlatButton ? color : 'white';
    return hasType ? fontColor : 'black';
};
