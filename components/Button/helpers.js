export const getFontColor = () => (props) => {
    switch (props.type) {
    case 'flat':
        return props.color ? props.theme.color[props.color] : props.theme.color.black;
    case 'raised':
        return props.color ? props.theme.color.white : props.theme.color.black;
    default:
        return props.color ? props.theme.color.white : props.theme.color.black;
    }
};

export const getColor = () => (props) => {
    if (props.type) {
        return (props.type === 'flat') ? 'transparent' : props.theme.color[props.color];
    }
    return props.theme.color[props.color] || props.theme.color[props.lightGray];
};

export const getBorderStyle = () => (props) => {
    if (props.type) {
        return (props.type === 'flat') ? 'none' : 'solid';
    }
    return 'solid' || 'none';
};

export const getIconColor = (type, color) => {
    switch (type) {
    case 'flat':
        return color || 'black';
    case 'raised':
        return color ? 'white' : 'black';
    default:
        return color ? 'white' : 'black';
    }
};
