import styled from 'styled-components';

export const StyledText = styled.span`
    color: ${props => props.theme.color[props.color] || 'inherit'};
    font-size: ${props => props.theme.scale[props.scale] || 'inherit'};
`;
