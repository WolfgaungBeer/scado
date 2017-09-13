import styled from 'styled-components';
import { getFontColor, getColor, getBorderStyle } from './helpers';

const StyledButton = styled.button`
    cursor: pointer;
    font-size: ${props => props.theme.scale[props.scale]};
    color: ${getFontColor()};
    background-color: ${getColor()};
    border-style: ${getBorderStyle()};
    border-color: ${getColor()};
    border-width: 1px;
    border-radius: 2px;
    box-shadow: ${props => ((props.type === 'raised') ? '3px 3px 10px -3px rgba(0,0,0,0.75)' : '')};
    &:focus {
        outline: 0;
    }
    > div {
        padding: ${props => (props.iconOnly ? '0.25rem' : '0.25rem 0.5rem')};
        > i {
            transform: translateY(13%);
            padding-right: ${props => (props.iconOnly ? '' : '0.25rem')};
        }
    }
`;

StyledButton.displayName = 'StyledButton';

export default StyledButton;
