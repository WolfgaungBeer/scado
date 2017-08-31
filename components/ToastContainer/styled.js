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
    border-style: solid;
    border-width: 1px;
    border-radius: 4px;
    border-color: ${props => props.theme.color.lightGray};
    box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.30);
`;

export const IconWrapper = styled(Flex)`
    background-color: ${props => props.theme.color[props.color]};
    border-color: ${props => props.theme.color[props.color]};
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
`;

export const ComponentWrapper = styled(Flex)`
    padding: 0.25rem;
`;

export const CloseButtonWrapper = styled(Flex)`
    position: relative;
`;

export const AbsoluteWrapper = styled.div`
    position: absolute;
    top: -5px;
    right: -8px;
`;
