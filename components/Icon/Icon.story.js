import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Icon from './';


const StyledIcon = styled(Icon)`
    color: ${props => props.theme.color.warning};
    font-size: ${props => props.theme.scale.xxl};
`;

const Wrapper = styled.div`
    color: ${props => props.theme.color.error};
    font-size: ${props => props.theme.scale.m};
`;

storiesOf('Icon', module)
    .add('default', () => (
        <Icon icon="check_circle" />
    ))
    .add('color error and size l', () => (
        <Icon icon="check_circle" color="error" scale="l" />
    ))
    .add('color success and size xxl', () => (
        <Icon icon="check_circle" color="success" scale="xxl" />
    ))
    .add('color success and size xxl and loading set to true', () => (
        <Icon icon="check_circle" color="success" scale="xxl" loading />
    ))
    .add('styled(Icon)', () => (
        <StyledIcon icon="check_circle" />
    ))
    .add('inside a wrapper', () => (
        <Wrapper>
            <Icon icon="check_circle" />
        </Wrapper>
    ));
