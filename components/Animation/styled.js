import styled from 'styled-components';

const AnimationWrapper = styled.div`
    display: ${props => (props.inline ? 'inline-block' : 'block')};
`;

AnimationWrapper.displayName = 'AnimationWrapper';

export default AnimationWrapper;
