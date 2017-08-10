import styled from 'styled-components';

const getColor = () => (props) => `color: ${props.theme.color[props.color]}`;
const getScale = () => (props) => `font-size: ${props.theme.scale[props.scale]}`;

const iconTranslate = () => `
    > i {
        transform translateY(15%);
    }
`;

const Text = {

    H1: styled.h1`
        ${getColor()};
        ${getScale()};
        ${iconTranslate()};
    `,

    H2: styled.h2`
        ${getColor()};
        ${getScale()};
        ${iconTranslate()};
    `,

    H3: styled.h3`
        ${getColor()};
        ${getScale()};
        ${iconTranslate()};
    `,

    H4: styled.h4`
        ${getColor()};
        ${getScale()};
        ${iconTranslate()};
    `,

    H5: styled.h5`
        ${getColor()};
        ${getScale()};
        ${iconTranslate()};
    `,

    H6: styled.h6`
        ${getColor()};
        ${getScale()};
        ${iconTranslate()};
    `,

    P: styled.p`
        ${getColor()};
        ${getScale()};
        ${iconTranslate()};
    `,

    Label: styled.label`
        ${getColor()};
        ${getScale()};
        ${iconTranslate()};
    `

}

export default Text;
