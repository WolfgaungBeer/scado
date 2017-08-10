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
    .add('with type flat and color success and scale l', () => (
        <Theme theme={defaultTheme}>
            <Button type="flat" color="success" scale="l" onClick={click}>CLICK ME</Button>
        </Theme>
    ))
    .add('with type raised and color error', () => (
        <Theme theme={defaultTheme}>
            <Button type="raised" color="error" onClick={click}>CLICK ME</Button>
        </Theme>
    ))
    .add('with type raised and color warning and scale l', () => (
        <Theme theme={defaultTheme}>
            <Button type="raised" color="warning" scale="l" onClick={click}>CLICK ME</Button>
        </Theme>
    ))
    .add('with a icon', () => (
        <Theme theme={defaultTheme}>
            <Button icon="dashboard" onClick={click}>CLICK ME</Button>
        </Theme>
    ))
    .add('with a icon and type flat and color warning', () => (
        <Theme theme={defaultTheme}>
            <Button type="flat" color="warning" icon="dashboard" onClick={click}>CLICK ME</Button>
        </Theme>
    ))
    .add('with a icon and type raised and color success', () => (
        <Theme theme={defaultTheme}>
            <Button type="raised" color="success" icon="dashboard" onClick={click}>CLICK ME</Button>
        </Theme>
    ))
    .add('with a icon and type raised and color error and scale l', () => (
        <Theme theme={defaultTheme}>
            <Button type="raised" color="error" scale="l" icon="dashboard" onClick={click}>CLICK ME</Button>
        </Theme>
    ))
    .add('with a icon and type raised and color error and scale xxl', () => (
        <Theme theme={defaultTheme}>
            <Button type="raised" color="error" scale="xxl" icon="dashboard" onClick={click}>CLICK ME</Button>
        </Theme>
    ))
    .add('icon only button', () => (
        <Theme theme={defaultTheme}>
            <Button icon="dashboard" onClick={click} />
        </Theme>
    ))
    .add('icon only button with type flat and color success and scale l', () => (
        <Theme theme={defaultTheme}>
            <Button type="flat" color="success" scale="l" icon="dashboard" onClick={click} />
        </Theme>
    ))
    .add('icon only button with type flat and color success and scale xxl', () => (
        <Theme theme={defaultTheme}>
            <Button type="flat" color="success" scale="xxl" icon="dashboard" onClick={click} />
        </Theme>
    ))
    .add('icon only button with type raised and color error', () => (
        <Theme theme={defaultTheme}>
            <Button type="raised" color="error" icon="dashboard" onClick={click} />
        </Theme>
    ))
    .add('icon only button with type raised and color warning and scale l', () => (
        <Theme theme={defaultTheme}>
            <Button type="raised" color="warning" scale="l" icon="dashboard" onClick={click} />
        </Theme>
    ));
