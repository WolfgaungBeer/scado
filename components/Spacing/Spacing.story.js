import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Spacing from './';


storiesOf('Spacing', module)
    .add('default', () => (
        <Spacing />
    ))
    .add('with props', () => (
        <Spacing scale={text('scale', 'l')} />
    ));
