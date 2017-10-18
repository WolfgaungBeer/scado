import styled from 'styled-components';
import { number } from 'prop-types';
import { getBreakpoint, getWidth } from './helpers';

const propTypes = {
    s: number.isRequired,
    m: number.isRequired,
    l: number.isRequired,
    xl: number.isRequired,
};

const Column = styled.div`
    display: inline-block;
    box-sizing: border-box;
    width: ${getWidth('s')};
    padding: ${props => props.theme.scale[props.gutterV]} ${props => props.theme.scale[props.gutterH]};
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

Column.propTypes = propTypes;

export default Column;
