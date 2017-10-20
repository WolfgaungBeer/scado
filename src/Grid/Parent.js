import styled from 'styled-components';
import { bool, string, node } from 'prop-types';

const propTypes = {
    inline: bool,
    columns: string,
    rows: string,
    areas: string,
    columnGap: string,
    rowGap: string,
    className: string,
    children: node,
};

const defaultProps = {
    inline: undefined,
    columns: undefined,
    rows: undefined,
    areas: undefined,
    columnGap: undefined,
    rowGap: undefined,
    className: undefined,
    children: undefined,
};

const Parent = styled.div`
    display: ${props => (props.inline ? 'inline-grid' : 'grid')};
    grid-template-columns: ${props => props.columns};
    grid-template-rows: ${props => props.rows};
    grid-template-areas: ${props => props.areas};
    grid-column-gap: ${props => props.columnGap};
    grid-row-gap: ${props => props.rowGap};
    width: 100%;
    height: 100%;
`;

Parent.propTypes = propTypes;
Parent.defaultProps = defaultProps;

export default Parent;
