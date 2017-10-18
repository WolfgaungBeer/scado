import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import Button from './';
import Icon from '../Icon';
import Text from '../Text';

storiesOf('Button', module)
    .add('default', () => (
        <Button onClick={action('clicked')}>Click me!</Button>
    ))
    .add('with props', () => (
        <Button
            flat={boolean('flat', false)}
            raised={boolean('raised', false)}
            border={boolean('border', false)}
            disabled={boolean('disabled', false)}
            color={text('color', 'success')}
            scale={text('scale', 'l')}
            onClick={action('clicked')}
        >
            Click me!
        </Button>
    ))
    .add('with a custom component', () => (
        <Button raised color="error" onClick={action('clicked')}>
            <div>
                <Icon color="white" scale="xl">dashboard</Icon>
                <Text.Span color="white" scale="xl">Das ist ein Text</Text.Span>
            </div>
        </Button>
    ));
