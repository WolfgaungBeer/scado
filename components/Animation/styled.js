import styled from 'styled-components';

export const AnimationWrapper = styled.div`
    display: ${props => (props.inline ? 'inline-block' : 'block')};
`;
