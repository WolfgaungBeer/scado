import styled from 'styled-components';
import { string } from 'prop-types';

const propTypes = {
    scale: string,
};

const defaultProps = {
    scale: undefined,
};

const Spacing = styled.div`
    margin-top: ${props => props.theme.scale[props.scale] || props.theme.scale.m};
`;

Spacing.propTypes = propTypes;
Spacing.defaultProps = defaultProps;

export default Spacing;
