import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import IconButton from './';

storiesOf('IconButton', module)
    .add('default', () => (
        <IconButton icon="check_circle" onClick={action('clicked')} />
    ))
    .add('with props', () => (
        <IconButton
            icon={text('icon', 'check_circle')}
            color={text('color', 'success')}
            scale={text('scale', 'l')}
            loading={boolean('loading', false)}
            onClick={action('clicked')}
        />
    ));
