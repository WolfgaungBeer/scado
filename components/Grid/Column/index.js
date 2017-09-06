import styled from 'styled-components';
import { getBreakpoint, getWidth } from './helpers';

const Column = styled.div`
    display: inline-block;
    box-sizing: border-box;
    width: ${getWidth('s')};
    padding: ${props => props.theme.scale[props.gutter]};
    @media screen and (min-width: ${getBreakpoint('s')}) {
        width: ${getWidth('s')};
    }
    @media screen and (min-width: ${getBreakpoint('m')}) {
        width: ${getWidth('m')};
    }
    @media screen and (min-width: ${getBreakpoint('l')}) {
        width: ${getWidth('l')};
    }
    @media screen and (min-width: ${getBreakpoint('xl')}) {
        width: ${getWidth('xl')};
    }
`;

export default Column;
