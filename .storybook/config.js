import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Theme, defaultTheme } from '../src/scado';
import '../src/global.css';

/* eslint-disable */
const loadStories = () => {
    require('../src/Text/Text.story.js');
    require('../src/Icon/Icon.story.js');
    require('../src/ToastContainer/ToastContainer.story.js');
    require('../src/Flex/Flex.story.js');
    require('../src/Grid/Grid.story.js');
    require('../src/Button/Button.story.js');
    require('../src/ToolBar/ToolBar.story.js');
    require('../src/Spacing/Spacing.story.js');
};
/* eslint-enable */

const mockStore = configureStore();
const store = mockStore({
    scado: {
        theme: defaultTheme,
    },
});

const GlobalDecorator = storyFn => (
    <Provider store={store}>
        <Theme>
            {storyFn()}
        </Theme>
    </Provider>
);

addDecorator(GlobalDecorator);
addDecorator(withKnobs);
configure(loadStories, module);
