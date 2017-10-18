import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import Spacing from './';


storiesOf('Spacing', module)
    .add('default', () => (
        <Spacing>Spacing</Spacing>
    ))
    .add('with props', () => (
        <Spacing
            scale={text('scale', 'l')}
            top={boolean('top', false)}
            left={boolean('left', false)}
            bottom={boolean('bottom', false)}
            right={boolean('right', false)}
        >
            Spacing
        </Spacing>
    ));
