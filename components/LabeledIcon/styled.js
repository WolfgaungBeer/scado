import styled from 'styled-components';

export const StyledLabeledIcon = styled.div`
    position: relative;
    padding-top: 0.25em;
    color: ${props => props.theme.color[props.color]};
    font-size: ${props => props.theme.scale[props.scale]};
`;

export const StyledText = styled.span`
    position: relative;
    ${props => (props.invert ? 'right: 0.2rem' : 'left: 0.2rem')};
    padding: 0 0.25rem;
    bottom: 0.15em;
`;
