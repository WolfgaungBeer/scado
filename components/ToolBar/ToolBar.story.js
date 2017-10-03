import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ToolBar from './';
import Icon from '../Icon';
import Text from '../Text';

const ActionButtons = () => (
    <div>
        <Icon icon="search" color="white" scale="l" onClick={action('action button 1 clicked')} />
        <Icon icon="settings" color="white" scale="l" onClick={action('action button 2 clicked')} />
        <Icon icon="keyboard_arrow_down" color="white" scale="l" onClick={action('action button 3 clicked')} />
    </div>
);

storiesOf('ToolBar', module)
    .add('default', () => (
        <ToolBar actionButtons={<ActionButtons />}>
            <Icon icon="dashboard" color="white" scale="xl" onClick={action('menu clicked')} />
            <Text.Span color="white" scale="l" onClick={action('text clicked')}>Massiv App</Text.Span>
        </ToolBar>
    ));
