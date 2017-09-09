import React from 'react';
import { storiesOf } from '@storybook/react';
import Theme from '../Theme/Theme';
import defaultTheme from '../Theme/defaultTheme';
import Button from './';


const click = () => alert('button clicked');

storiesOf('Button', module)
    .add('default', () => (
        <Theme theme={defaultTheme}>
            <Button onClick={click}>CLICK ME</Button>
        </Theme>
    ))
    .add('with type flat', () => (
        <Theme theme={defaultTheme}>
            <Button type="flat" onClick={click}>CLICK ME</Button>
        </Theme>
    ))
    .add('with type raised', () => (
        <Theme theme={defaultTheme}>
            <Button type="raised" onClick={click}>CLICK ME</Button>
        </Theme>
    ))
    .add('with type default and color error and scale l', () => (
        <Theme theme={defaultTheme}>
            <Button color="error" scale="l" onClick={click}>CLICK ME</Button>
        </Theme>
    ))
    .add('with type flat and color error and scale l', () => (
        <Theme theme={defaultTheme}>
            <Button type="flat" color="error" scale="l" onClick={click}>CLICK ME</Button>
        </Theme>
    ))
    .add('with type raised and color error and scale l', () => (
        <Theme theme={defaultTheme}>
            <Button type="raised" color="error" scale="l" onClick={click}>CLICK ME</Button>
        </Theme>
    ))
    .add('default with icon', () => (
        <Theme theme={defaultTheme}>
            <Button icon="dashboard" onClick={click}>CLICK ME</Button>
        </Theme>
    ))
    .add('with type flat and an icon', () => (
        <Theme theme={defaultTheme}>
            <Button type="flat" icon="dashboard" onClick={click}>CLICK ME</Button>
        </Theme>
    ))
    .add('with type flat and an icon and loading set to true', () => (
        <Theme theme={defaultTheme}>
            <Button type="flat" icon="dashboard" loading onClick={click}>CLICK ME</Button>
        </Theme>
    ))
    .add('with type raised and an icon', () => (
        <Theme theme={defaultTheme}>
            <Button type="raised" icon="dashboard"onClick={click}>CLICK ME</Button>
        </Theme>
    ))
    .add('with type default and color error and scale l and an icon', () => (
        <Theme theme={defaultTheme}>
            <Button color="error" scale="l" icon="dashboard" onClick={click}>CLICK ME</Button>
        </Theme>
    ))
    .add('with type flat and color error and scale l and an icon', () => (
        <Theme theme={defaultTheme}>
            <Button type="flat" color="error" scale="l" icon="dashboard" onClick={click}>CLICK ME</Button>
        </Theme>
    ))
    .add('with type raised and color error and scale l and an icon', () => (
        <Theme theme={defaultTheme}>
            <Button type="raised" color="error" scale="l" icon="dashboard" loading onClick={click}>CLICK ME</Button>
        </Theme>
    ))
    .add('default with icon and no text', () => (
        <Theme theme={defaultTheme}>
            <Button icon="dashboard" onClick={click} />
        </Theme>
    ))
    .add('with type flat and an icon and no text', () => (
        <Theme theme={defaultTheme}>
            <Button type="flat" icon="dashboard"onClick={click} />
        </Theme>
    ))
    .add('with type raised and an icon and no text', () => (
        <Theme theme={defaultTheme}>
            <Button type="raised" icon="dashboard"onClick={click} />
        </Theme>
    ))
    .add('with type default and color error and scale l and an icon and no text', () => (
        <Theme theme={defaultTheme}>
            <Button color="error" scale="l" icon="dashboard" onClick={click} />
        </Theme>
    ))
    .add('with type flat and color error and scale l and an icon and no text', () => (
        <Theme theme={defaultTheme}>
            <Button type="flat" color="error" scale="l" icon="dashboard" onClick={click} />
        </Theme>
    ))
    .add('with type raised and color error and scale l and an icon and no text', () => (
        <Theme theme={defaultTheme}>
            <Button type="raised" color="error" scale="l" icon="dashboard" loading onClick={click} />
        </Theme>
    ));
