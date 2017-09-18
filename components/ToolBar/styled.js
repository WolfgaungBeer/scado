import Flex from '../Flex';

export const StyledToolBar = Flex.extend`
    width: 100%;
    height: ${props => props.theme.scale.xxxl};
    background-color: ${props => props.theme.color.primary};
`;

export const ChildrenWrapper = Flex.extend`
    height: 100%;
`;
