import { configure } from '@storybook/react';

const loadStories = () => {
    require('../components/Icon/Icon.story.js');
    require('../components/Button/Button.story.js');
    require('../components/Flex/Flex.story.js');
    require('../components/Grid/Grid.story.js');
}

configure(loadStories, module);
