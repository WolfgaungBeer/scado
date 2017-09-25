import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { Tabs, Tab } from './';
import Icon from '../Icon';


storiesOf('Tabs', module)
    .add('default', () => (
        <Tabs>
            <Tab active={boolean('active 1', true)} onClick={action('tab 1 clicked')}>tab 1</Tab>
            <Tab active={boolean('active 2', false)} onClick={action('tab 2 clicked')}>tab 2</Tab>
            <Tab active={boolean('active 3', false)} onClick={action('tab 3 clicked')}>tab 3</Tab>
        </Tabs>
    ))
    .add('with Icons', () => (
        <Tabs>
            <Tab active={boolean('active 1', true)} onClick={action('tab 1 clicked')}>
                <Icon icon="home" scale="xl" />
            </Tab>
            <Tab active={boolean('active 2', false)} onClick={action('tab 2 clicked')}>
                <Icon icon="dashboard" scale="xl" />
            </Tab>
            <Tab active={boolean('active 3', false)} onClick={action('tab 3 clicked')}>
                <Icon icon="settings" scale="xl" />
            </Tab>
        </Tabs>
    ));
