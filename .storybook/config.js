import { configure } from '@storybook/react';

const loadStories = () => {
    require('../components/Icon//Icon.story.js');
}

configure(loadStories, module);
