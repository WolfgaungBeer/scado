import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Theme from '../Theme/Theme';
import defaultTheme from '../Theme/defaultTheme';
import Text from '../Text';
import Icon from './';

import '../../node_modules/material-design-icons/iconfont/material-icons.css';

const IconWrapper = styled.div`
    color: #FF0FF0;
`;

storiesOf('Icon', module)
    .add('default', () => (
        <Theme theme={defaultTheme}>
            <Icon icon="group_work"/>
        </Theme>
    ))
    .add('color error and size l', () => (
        <Theme theme={defaultTheme}>
            <Icon icon="3d_rotation" color="error" scale="l" />
        </Theme>
    ))
    .add('color success and size xxl', () => (
        <Theme theme={defaultTheme}>
            <Icon icon="check_circle" color="success" scale="xxl" />
        </Theme>
    ))
    .add('wrapped in a Text.H1', () => (
        <Theme theme={defaultTheme}>
            <Text.H1><Icon icon="dashboard" />Icon Test</Text.H1>
        </Theme>
    ))
    .add('wrapped in a Text.H4', () => (
        <Theme theme={defaultTheme}>
            <Text.H4><Icon icon="dashboard" />Icon Test</Text.H4>
        </Theme>
    ))
    .add('wrapped in a Text.P', () => (
        <Theme theme={defaultTheme}>
            <Text.P><Icon icon="dashboard" />Icon Test</Text.P>
        </Theme>
    ))
    .add('wrapped in a Text.Label', () => (
        <Theme theme={defaultTheme}>
            <Text.Label><Icon icon="dashboard" />Icon Test</Text.Label>
        </Theme>
    ))
    .add('wrapped in a Text.Label with color and scale', () => (
        <Theme theme={defaultTheme}>
            <Text.Label color="success" scale="xxl"><Icon icon="dashboard" />Icon Test</Text.Label>
        </Theme>
    ))
    .add('custom icon', () => (
        <Theme theme={defaultTheme}>
            <IconWrapper>
                <Icon icon="dashboard" />
            </IconWrapper>
        </Theme>
    ));
