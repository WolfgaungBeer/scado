import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Theme from '../Theme/Theme';
import defaultTheme from '../Theme/defaultTheme';
import Icon from './';

import '../../node_modules/material-design-icons/iconfont/material-icons.css';

const StyledDiv = styled.div`
    color: #FF0FF0;
    font-size: 3rem;
`;

const H1 = styled.h1`
    color: #FF0FF0;
`;

const Label = styled.label`
    color: #FF0FF0;
`;

const SuccessIcon = styled(Icon).attrs({ style: {color: '#00FF00'} })``;

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
    .add('color success and size xl', () => (
        <Theme theme={defaultTheme}>
            <Icon icon="check_circle" color="success" scale="xl" />
        </Theme>
    ))
    .add('wrapped in a h1', () => (
        <Theme theme={defaultTheme}>
            <h1><Icon icon="dashboard" />Icon Test</h1>
        </Theme>
    ))
    .add('wrapped in a h3', () => (
        <Theme theme={defaultTheme}>
            <h3><Icon icon="done" />Icon Test</h3>
        </Theme>
    ))
    .add('wrapped in a p', () => (
        <Theme theme={defaultTheme}>
            <p><Icon icon="extension" />Icon Test</p>
        </Theme>
    ))
    .add('wrapped in a label', () => (
        <Theme theme={defaultTheme}>
            <label><Icon icon="dashboard" />Icon Test</label>
        </Theme>
    ))
    .add('wrapped in a styled h1', () => (
        <Theme theme={defaultTheme}>
            <H1><Icon icon="dashboard" />Icon Test</H1>
        </Theme>
    ))
    .add('wrapped in a styled label', () => (
        <Theme theme={defaultTheme}>
            <Label><Icon icon="dashboard" />Icon Test</Label>
        </Theme>
    ))
    .add('wrapped in a styled div', () => (
        <Theme theme={defaultTheme}>
            <StyledDiv>
                <label><Icon icon="dashboard" />Icon Test</label>
            </StyledDiv>
        </Theme>
    ));
