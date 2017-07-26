import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Theme from '../Theme/Theme';
import defaultTheme from '../Theme/defaultTheme';
import Button from './';

import '../../node_modules/material-design-icons/iconfont/material-icons.css';

const click = () => alert('button clicked');

const StyledDiv = styled.div`
    width: 200px;
    height: 200px;
    background-color: #FF0000;
`;

storiesOf('Button', module)
    .add('default', () => (
        <Theme theme={defaultTheme}>
            <Button onClick={click}>CLICK ME</Button>
        </Theme>
    ))
    .add('with a border', () => (
        <Theme theme={defaultTheme}>
            <Button border onClick={click}>CLICK ME</Button>
        </Theme>
    ))
    .add('with color error and size xl', () => (
        <Theme theme={defaultTheme}>
            <Button color="error" scale="xl" onClick={click}>CLICK ME</Button>
        </Theme>
    ))
    .add('with color error and size xl and a icon', () => (
        <Theme theme={defaultTheme}>
            <Button color="error" scale="xl" icon="dashboard" onClick={click}>CLICK ME</Button>
        </Theme>
    ))
    .add('with color error and size xl and only a icon', () => (
        <Theme theme={defaultTheme}>
            <Button color="error" scale="xl" icon="dashboard" onClick={click} />
        </Theme>
    ))
    .add('with color success and size m and a icon and a border', () => (
        <Theme theme={defaultTheme}>
            <Button color="success" scale="m" icon="dashboard" border onClick={click}>CLICK ME</Button>
        </Theme>
    ))
    .add('with color error and size l and a icon and a border', () => (
        <Theme theme={defaultTheme}>
            <Button color="error" scale="l" icon="dashboard" border onClick={click}>CLICK ME</Button>
        </Theme>
    ))
    .add('with color error and size l and only a icon and a border', () => (
        <Theme theme={defaultTheme}>
            <Button color="error" scale="l" icon="code" border onClick={click}></Button>
        </Theme>
    ))
    .add('with type success', () => (
        <Theme theme={defaultTheme}>
            <Button type="success" onClick={click}>CLICK ME</Button>
        </Theme>
    ))
    .add('with type error', () => (
        <Theme theme={defaultTheme}>
            <Button type="error" onClick={click}>CLICK ME</Button>
        </Theme>
    ))
    .add('with type warning and size xl', () => (
        <Theme theme={defaultTheme}>
            <Button type="warning" scale="xl" onClick={click}>CLICK ME</Button>
        </Theme>
    ))
    .add('with type error and a icon', () => (
        <Theme theme={defaultTheme}>
            <Button type="error" icon="code" onClick={click}>CLICK ME</Button>
        </Theme>
    ))
    .add('with type warning and size xl and a icon', () => (
        <Theme theme={defaultTheme}>
            <Button type="warning" icon="code" scale="xl" onClick={click}>CLICK ME</Button>
        </Theme>
    ))
    .add('with a component inside the button', () => (
        <Theme theme={defaultTheme}>
            <Button onClick={click}><StyledDiv /></Button>
        </Theme>
    ));
