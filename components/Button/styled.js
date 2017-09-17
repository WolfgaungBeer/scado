import styled from 'styled-components';
import { getBackgroundColor, getBorder, getShadow, getFontColor } from './helpers';

export const StyledButton = styled.button`
    cursor: pointer;
    background-color: ${getBackgroundColor()};
    ${getBorder()};
    ${getShadow()};
    ${getFontColor()}
    font-size: ${props => props.theme.scale[props.scale]};
    padding: 0.25rem 0.5rem;
    &:focus {
        outline: 0;
    }
`;
