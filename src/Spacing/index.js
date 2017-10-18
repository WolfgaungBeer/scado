import styled from 'styled-components';
import { string, bool, node } from 'prop-types';
import { getStyle } from './helpers';

const propTypes = {
    scale: string,
    top: bool,
    left: bool,
    bottom: bool,
    right: bool,
    children: node,
};

const defaultProps = {
    scale: undefined,
    top: undefined,
    left: undefined,
    bottom: undefined,
    right: undefined,
    children: undefined,
};

const Spacing = styled.div`
    ${getStyle()}
`;

Spacing.propTypes = propTypes;
Spacing.defaultProps = defaultProps;

export default Spacing;
