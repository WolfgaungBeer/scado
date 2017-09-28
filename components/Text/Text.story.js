import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Text from './';
import Icon from '../Icon';


storiesOf('Text', module)
    .add('H1', () => (
        <Text.H1>Das ist ein Text</Text.H1>
    ))
    .add('H2', () => (
        <Text.H2>Das ist ein Text</Text.H2>
    ))
    .add('H3', () => (
        <Text.H3>Das ist ein Text</Text.H3>
    ))
    .add('H4', () => (
        <Text.H4>Das ist ein Text</Text.H4>
    ))
    .add('H5', () => (
        <Text.H5>Das ist ein Text</Text.H5>
    ))
    .add('H6', () => (
        <Text.H6>Das ist ein Text</Text.H6>
    ))
    .add('P', () => (
        <Text.P>Das ist ein Text</Text.P>
    ))
    .add('A', () => (
        <Text.A>Das ist ein Text</Text.A>
    ))
    .add('Label', () => (
        <Text.Label>Das ist ein Text</Text.Label>
    ))
    .add('with props', () => (
        <Text.H1
            color={text('color', 'success')}
            scale={text('scale', 'l')}
        >Das ist ein Text</Text.H1>
    ))
    .add('with an icon on the left side', () => (
        <div>
            <Icon icon="dashboard" color="success" scale="xl" />
            <Text.Span color="success" scale="xl">Das ist ein Text</Text.Span>
        </div>
    ))
    .add('with an icon on the right side', () => (
        <div>
            <Text.Span color="success" scale="xl">Das ist ein Text</Text.Span>
            <Icon icon="dashboard" color="success" scale="xl" />
        </div>
    ))
    .add('with an nested icon', () => (
        <Text.Span color="success" scale="xl">
            <Icon icon="dashboard" color="success" scale="xl" />
            Das ist ein Text
        </Text.Span>
    ));
