import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Theme from '../Theme/Theme';
import defaultTheme from '../Theme/defaultTheme';
import Text from './';

storiesOf('Text', module)
    .add('default', () => (
        <Theme theme={defaultTheme}>
            <Text.H1>This is a H1</Text.H1>
        </Theme>
    ))
    .add('H1 default', () => (
        <Theme theme={defaultTheme}>
            <Text.H1>This is a H1</Text.H1>
        </Theme>
    ))
    .add('H1 with color', () => (
        <Theme theme={defaultTheme}>
            <Text.H1 color="success">This is a H1</Text.H1>
        </Theme>
    ))
    .add('H1 with color and scale', () => (
        <Theme theme={defaultTheme}>
            <Text.H1 color="error" scale="xxl">This is a H1</Text.H1>
        </Theme>
    ))
    .add('H2 default', () => (
        <Theme theme={defaultTheme}>
            <Text.H2>This is a H2</Text.H2>
        </Theme>
    ))
    .add('H2 with color', () => (
        <Theme theme={defaultTheme}>
            <Text.H2 color="success">This is a H2</Text.H2>
        </Theme>
    ))
    .add('H2 with color and scale', () => (
        <Theme theme={defaultTheme}>
            <Text.H2 color="error" scale="xxl">This is a H2</Text.H2>
        </Theme>
    ))
    .add('H3 default', () => (
        <Theme theme={defaultTheme}>
            <Text.H3>This is a H3</Text.H3>
        </Theme>
    ))
    .add('H3 with color', () => (
        <Theme theme={defaultTheme}>
            <Text.H3 color="success">This is a H3</Text.H3>
        </Theme>
    ))
    .add('H3 with color and scale', () => (
        <Theme theme={defaultTheme}>
            <Text.H3 color="error" scale="xxl">This is a H3</Text.H3>
        </Theme>
    ))
    .add('H4 default', () => (
        <Theme theme={defaultTheme}>
            <Text.H4>This is a H4</Text.H4>
        </Theme>
    ))
    .add('H4 with color', () => (
        <Theme theme={defaultTheme}>
            <Text.H4 color="success">This is a H4</Text.H4>
        </Theme>
    ))
    .add('H4 with color and scale', () => (
        <Theme theme={defaultTheme}>
            <Text.H4 color="error" scale="xxl">This is a H4</Text.H4>
        </Theme>
    ))
    .add('H5 default', () => (
        <Theme theme={defaultTheme}>
            <Text.H5>This is a H5</Text.H5>
        </Theme>
    ))
    .add('H5 with color', () => (
        <Theme theme={defaultTheme}>
            <Text.H5 color="success">This is a H5</Text.H5>
        </Theme>
    ))
    .add('H5 with color and scale', () => (
        <Theme theme={defaultTheme}>
            <Text.H5 color="error" scale="xxl">This is a H5</Text.H5>
        </Theme>
    ))
    .add('H6 default', () => (
        <Theme theme={defaultTheme}>
            <Text.H6>This is a H6</Text.H6>
        </Theme>
    ))
    .add('H6 with color', () => (
        <Theme theme={defaultTheme}>
            <Text.H6 color="success">This is a H6</Text.H6>
        </Theme>
    ))
    .add('H6 with color and scale', () => (
        <Theme theme={defaultTheme}>
            <Text.H6 color="error" scale="xxl">This is a H6</Text.H6>
        </Theme>
    ))
    .add('P default', () => (
        <Theme theme={defaultTheme}>
            <Text.P>This is a P</Text.P>
        </Theme>
    ))
    .add('P with color', () => (
        <Theme theme={defaultTheme}>
            <Text.P color="success">This is a P</Text.P>
        </Theme>
    ))
    .add('P with color and scale', () => (
        <Theme theme={defaultTheme}>
            <Text.P color="error" scale="xxl">This is a P</Text.P>
        </Theme>
    ))
    .add('Label default', () => (
        <Theme theme={defaultTheme}>
            <Text.Label>This is a Label</Text.Label>
        </Theme>
    ))
    .add('Label with color', () => (
        <Theme theme={defaultTheme}>
            <Text.Label color="success">This is a Label</Text.Label>
        </Theme>
    ))
    .add('Label with color and scale', () => (
        <Theme theme={defaultTheme}>
            <Text.Label color="error" scale="xxl">This is a Label</Text.Label>
        </Theme>
    ));
