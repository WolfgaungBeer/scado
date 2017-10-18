import styled from 'styled-components';
import { string, node } from 'prop-types';

const propTypes = {
    area: string,
    children: node,
};

const defaultProps = {
    area: undefined,
    children: undefined,
};

const Child = styled.div`
    grid-area: ${props => props.area};
`;

Child.propTypes = propTypes;
Child.defaultProps = defaultProps;

export default Child;
