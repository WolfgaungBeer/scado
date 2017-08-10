import styled from 'styled-components';
import { getBackgroundColor, getFontColor, getBorderStyle } from './helpers';

const StyledButton = styled.button`
    cursor: pointer;
    font-size: ${props => props.theme.scale[props.scale]};
    background-color: ${props => getBackgroundColor(props)};
    color: ${props => getFontColor(props)};
    border-style: ${props => getBorderStyle(props)};
    border-color: ${props => props.theme.color[props.color]};
    border-width: 1px;
    border-radius: 0.15rem;
    > div {
        padding: ${props => props.iconPadding ? '0.2rem 0.3rem 0.3rem 0.3rem' : '0 0 0.1rem 0'};
        > i {
            transform: translateY(13%);
            padding-right: ${props => props.iconPadding ? '0.25rem' : undefined};
        }
    }
`;

StyledButton.displayName = 'StyledButton';

export default StyledButton;
