import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import Icon from './';


storiesOf('Icon', module)
    .add('default', () => (
        <Icon icon="check_circle" />
    ))
    .add('with props', () => (
        <Icon
            icon={text('icon', 'check_circle')}
            color={text('color', 'success')}
            scale={text('scale', 'l')}
            loading={boolean('loading', false)}
            onClick={action('icon clicked')}
        />
    ));
