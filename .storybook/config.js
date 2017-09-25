import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Theme from '../components/Theme';
import defaultTheme from '../components/Theme/initialState';

/* eslint-disable */
const loadStories = () => {
    require('../components/Text/Text.story.js');
    require('../components/Icon/Icon.story.js');
    require('../components/ToastContainer/ToastContainer.story.js');
    require('../components/Flex/Flex.story.js');
    require('../components/Grid/Grid.story.js');
    require('../components/IconButton/IconButton.story.js');
    require('../components/Button/Button.story.js');
    require('../components/ToolBar/ToolBar.story.js');
    require('../components/Tabs/Tabs.story.js');
};
/* eslint-enable */

const mockStore = configureStore();
const store = mockStore({
    scado: {
        animations: {},
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
