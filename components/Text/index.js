import styled from 'styled-components';
import { string, node } from 'prop-types';
import { textStyle, font } from './helpers';


const propTypes = {
    color: string,
    scale: string,
    children: node,
};

const defaultProps = {
    color: undefined,
    scale: undefined,
    children: undefined,
};

const Text = {
    H1: styled.h1`${textStyle()} ${font('heading')}`,
    H2: styled.h2`${textStyle()} ${font('heading')}`,
    H3: styled.h3`${textStyle()} ${font('heading')}`,
    H4: styled.h4`${textStyle()} ${font('heading')}`,
    H5: styled.h5`${textStyle()} ${font('heading')}`,
    H6: styled.h6`${textStyle()} ${font('heading')}`,
    P: styled.p`${textStyle()} ${font('paragraph')}`,
    A: styled.a`${textStyle()} ${font('paragraph')}`,
    Label: styled.label`${textStyle()} ${font('paragraph')}`,
    Span: styled.span`${textStyle()} ${font('paragraph')}`,
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
