import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Text from './';
import Icon from '../Icon';


storiesOf('Text', module)
    .add('default', () => (
        <Text>Das ist ein Text</Text>
    ))
    .add('with props', () => (
        <Text
            color={text('color', 'success')}
            scale={text('scale', 'l')}
        >Das ist ein Text</Text>
    ))
    .add('with an icon on the left side', () => (
        <div>
            <Icon icon="dashboard" color="success" scale="xl" />
            <Text color="success" scale="xl">Das ist ein Text</Text>
        </div>
    ))
    .add('with an icon on the right side', () => (
        <div>
            <Text color="success" scale="xl">Das ist ein Text</Text>
            <Icon icon="dashboard" color="success" scale="xl" />
        </div>
    ))
    .add('with an nested icon', () => (
        <Text color="success" scale="xl">
            <Icon icon="dashboard" color="success" scale="xl" />
            Das ist ein Text
        </Text>
    ));
