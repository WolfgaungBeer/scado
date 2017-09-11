import styled, { keyframes, css } from 'styled-components';

const rotationKeyframes = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const StyledIcon = styled.i`
    ${(props) => {
        if (props.loading) {
            return css`
                display: inline-block;
                animation: ${rotationKeyframes} 0.85s linear infinite;
            `;
        }
        return '';
    }};
    color: ${props => props.theme.color[props.color] || 'inherit'};
    font-size: ${props => props.theme.scale[props.scale] || 'inherit'};
`;

export default StyledIcon;
