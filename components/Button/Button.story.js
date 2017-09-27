import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import Button from './';
import Icon from '../Icon';
import Text from '../Text';

storiesOf('Button', module)
    .add('default', () => (
        <Button onClick={action('clicked')}>Click me!</Button>
    ))
    .add('with props', () => (
        <Button
            buttonType={text('buttonType', 'flat')}
            color={text('color', 'success')}
            scale={text('scale', 'l')}
            onClick={action('clicked')}
        >
            Click me!
        </Button>
    ))
    .add('with a custom component', () => (
        <Button buttonType="raised" color="error" onClick={action('clicked')}>
            <div>
                <Icon icon="dashboard" color="white" scale="xl" />
                <Text color="white" scale="xl">Das ist ein Text</Text>
            </div>
        </Button>
    ));
