import styled from 'styled-components';
import { string, node } from 'prop-types';
import { getShadow } from './helpers';

const propTypes = {
    backgroundColor: string,
    borderColor: string,
    borderRadius: string,
    shadow: string,
    className: string,
    children: node,
};

const defaultProps = {
    backgroundColor: undefined,
    borderColor: undefined,
    borderRadius: undefined,
    shadow: undefined,
    className: undefined,
    children: undefined,
};

const Panel = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.color[props.backgroundColor]};
    border-style: ${props => props.borderColor && 'solid'};
    border-width: 1px;
    border-color: ${props => props.theme.color[props.borderColor]};
    border-radius: ${props => props.theme.scale[props.borderRadius]};
    box-sizing: border-box;
    box-shadow: ${getShadow()};
`;

Panel.propTypes = propTypes;
Panel.defaultProps = defaultProps;

export default Panel;
