import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import Icon from './';


storiesOf('Icon', module)
    .add('default', () => (
        <Icon>check_circle</Icon>
    ))
    .add('with props', () => (
        <Icon
            color={text('color', 'success')}
            scale={text('scale', 'l')}
            loading={boolean('loading', false)}
            onClick={action('icon clicked')}
        >
            check_circle
        </Icon>
    ));
