import styled from 'styled-components';
import { getBackgroundColor, getBorder, getShadow, getFontColor } from './helpers';

export const StyledButton = styled.button`
    width: 100%;
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    background-color: ${getBackgroundColor()};
    ${getBorder()};
    ${getShadow()};
    color: ${getFontColor()};
    font-size: ${props => props.theme.scale[props.scale]};
    font-family: ${props => props.theme.fonts.paragraph};
    padding: 0.5rem 1rem;
    &:focus {
        outline: 0;
    }
`;
