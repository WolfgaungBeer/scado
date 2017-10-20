import styled from 'styled-components';
import { bool, string } from 'prop-types';

const propTypes = {
    inline: bool,
    flex: string,
    justifyContent: string,
    alignItems: string,
    className: string,
};

const defaultProps = {
    inline: undefined,
    flex: undefined,
    justifyContent: undefined,
    alignItems: undefined,
    className: undefined,
};

const Flex = styled.div`
    display: ${props => (props.inline ? 'inline-flex' : 'flex')};
    flex: ${props => props.flex || '0 1 auto'};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
`;

Flex.propTypes = propTypes;
Flex.defaultProps = defaultProps;
Flex.displayName = 'Flex';

export default Flex;
