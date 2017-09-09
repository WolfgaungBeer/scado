import React from 'react';
import { Provider } from 'react-redux';
import { configure, addDecorator } from '@storybook/react';
import Theme from '../components/Theme/Theme';
import defaultTheme from '../components/Theme/defaultTheme';

const loadStories = () => {
    require('../components/Icon/Icon.story.js');
    require('../components/ToastContainer/ToastContainer.story.js');
    require('../components/Button/Button.story.js');
    require('../components/Flex/Flex.story.js');
    require('../components/Grid/Grid.story.js');
}

const mockStore = {
    subscribe: () => {},
    dispatch: () => {},
    getState: () => {
        return {
            scado: {
                animations: {}
            }
        };
    }
};

const GlobalDecorator = (storyFn) => (
    <Provider store={mockStore}>
        <Theme theme={defaultTheme}>
            {storyFn()}
        </Theme>
    </Provider>
);

addDecorator(GlobalDecorator);
configure(loadStories, module);
