import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import LabeledIcon from './';


storiesOf('LabeledIcon', module)
    .add('default', () => (
        <LabeledIcon icon="dashboard" label="Ein Label" />
    ))
    .add('with props', () => (
        <LabeledIcon
            icon={text('icon', 'dashboard')}
            label={text('label', 'Ein Label')}
            color={text('color', 'success')}
            scale={text('scale', 'l')}
            loading={boolean('loading', false)}
            invert={boolean('invert', false)}
        />
    ));
