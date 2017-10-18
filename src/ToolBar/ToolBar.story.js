import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ToolBar from './';
import Icon from '../Icon';
import Text from '../Text';

const ActionButtons = () => (
    <div>
        <Icon color="white" scale="l" onClick={action('search clicked')}>search</Icon>
        <Icon color="white" scale="l" onClick={action('settings clicked')}>settings</Icon>
        <Icon color="white" scale="l" onClick={action('more button clicked')}>keyboard_arrow_down</Icon>
    </div>
);

storiesOf('ToolBar', module)
    .add('default', () => (
        <ToolBar actionButtons={<ActionButtons />}>
            <Icon color="white" scale="xl" onClick={action('menu clicked')}>dashboard</Icon>
            <Text.Span color="white" scale="l" onClick={action('text clicked')}>Massiv App</Text.Span>
        </ToolBar>
    ));
