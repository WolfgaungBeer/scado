import styled from 'styled-components';
import Flex from '../Flex';

export const ToastContainerWrapper = styled.div`
    position: fixed;
    ${props => props.pos1}: 10px;
    ${props => props.pos2}: 10px;
    z-index: 100;
`;

export const ToastWrapper = styled(Flex)`
    width: 300px;
    min-height: 50px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.45);
`;

export const IconWrapper = styled(Flex)`
    background-color: ${props => props.theme.color[props.color]};
`;

export const ComponentWrapper = styled(Flex)`
    padding: 0.5rem 1rem;
`;

export const CloseButtonWrapper = styled(Flex)`
    position: relative;
`;

export const AbsoluteWrapper = styled.div`
    position: absolute;
    top: -5px;
    right: -8px;
`;
