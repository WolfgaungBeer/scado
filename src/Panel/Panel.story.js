import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Panel from './';


storiesOf('Panel', module)
    .add('default', () => (
        <Panel>test</Panel>
    ))
    .add('with props', () => (
        <Panel
            backgroundColor={text('backgroundColor', 'white')}
            borderColor={text('borderColor', 'lightGray')}
            borderRadius={text('borderRadius', 's')}
            shadow={text('shadow', 's')}
        >
            test
        </Panel>
    ));
