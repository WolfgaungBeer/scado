import styled from 'styled-components';

const StyledButton = styled.button`
    cursor: pointer;
    background-color: ${props => props.type ? props.theme.color[props.type] : 'transparent'};
    color: ${props => props.theme.color[props.color]};
    font-size: ${props => props.theme.scale[props.scale]};
    border-style: ${props => props.border ? 'solid' : 'none'};
    border-color: ${props => props.theme.color[props.borderColor]};
    border-radius: 0.25rem;
    border-width: 1px;
    > div {
        padding: 0.2rem 0.3rem 0.2rem 0.3rem;
        > i {
            padding-right: ${props => props.iconPadding};
        }
    }
`;

StyledButton.displayName = 'StyledButton';

export default StyledButton;
