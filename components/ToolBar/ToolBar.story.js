import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ToolBar from './';
import IconButton from '../IconButton';
import Text from '../Text';

const ActionButtons = () => (
    <div>
        <IconButton icon="search" color="white" scale="l" onClick={action('action button 1 clicked')} />
        <IconButton icon="settings" color="white" scale="l" onClick={action('action button 2 clicked')} />
        <IconButton icon="keyboard_arrow_down" color="white" scale="l" onClick={action('action button 3 clicked')} />
    </div>
);

storiesOf('ToolBar', module)
    .add('default', () => (
        <ToolBar actionButtons={<ActionButtons />}>
            <IconButton icon="dashboard" color="white" scale="xl" onClick={action('menu clicked')} />
            <Text.Span color="white" scale="l" onClick={action('text clicked')}>Massiv App</Text.Span>
        </ToolBar>
    ));
