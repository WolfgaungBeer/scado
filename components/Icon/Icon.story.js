import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Theme from '../Theme/Theme';
import defaultTheme from '../Theme/defaultTheme';
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
        <Theme theme={defaultTheme}>
            <Icon icon="check_circle" />
        </Theme>
    ))
    .add('color error and size l', () => (
        <Theme theme={defaultTheme}>
            <Icon icon="check_circle" color="error" scale="l" />
        </Theme>
    ))
    .add('color success and size xxl', () => (
        <Theme theme={defaultTheme}>
            <Icon icon="check_circle" color="success" scale="xxl" />
        </Theme>
    ))
    .add('styled(Icon)', () => (
        <Theme theme={defaultTheme}>
            <StyledIcon icon="check_circle" />
        </Theme>
    ))
    .add('inside a wrapper', () => (
        <Theme theme={defaultTheme}>
            <Wrapper>
                <Icon icon="check_circle" />
            </Wrapper>
        </Theme>
    ));
