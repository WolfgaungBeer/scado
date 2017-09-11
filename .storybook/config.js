import React from 'react';
import { Provider } from 'react-redux';
import { configure, addDecorator } from '@storybook/react';
import Theme from '../components/Theme/Theme';
import defaultTheme from '../components/Theme/defaultTheme';

const iconStory = require('../components/Icon/Icon.story.js');
const toastContainerStory = require('../components/ToastContainer/ToastContainer.story.js');
const flexStory = require('../components/Flex/Flex.story.js');
const gridStory = require('../components/Grid/Grid.story.js');

const loadStories = () => ({
    iconStory,
    toastContainerStory,
    flexStory,
    gridStory,
});

const mockStore = {
    subscribe: () => {},
    dispatch: () => {},
    getState: () => ({
        scado: {
            animations: {},
        },
    }),
};

const GlobalDecorator = storyFn => (
    <Provider store={mockStore}>
        <Theme theme={defaultTheme}>
            {storyFn()}
        </Theme>
    </Provider>
);

addDecorator(GlobalDecorator);
configure(loadStories, module);
