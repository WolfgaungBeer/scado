import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import Button from './';


storiesOf('Button', module)
    .add('default', () => (
        <Button onClick={action('clicked')}>Click me!</Button>
    ))
    .add('with props', () => (
        <Button
            type={text('type', 'flat')}
            color={text('color', 'success')}
            scale={text('scale', 'l')}
            onClick={action('clicked')}
        >
            Click me!
        </Button>
    ));
