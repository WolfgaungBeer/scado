import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from '../Icon';
import Flex from './';


const FlexParent = Flex.extend`
    width: 300px;
    height: 100px;
    background-color: #777777;
`;

storiesOf('Flex', module)
    .add('default', () => (
        <FlexParent inline alignItems="center">
            <Flex flex="1 1 auto"><Icon icon="stars" /></Flex>
            <Flex flex="1 1 auto"><Icon icon="stars" /></Flex>
            <Flex flex="1 1 auto"><Icon icon="stars" /></Flex>
            <Flex flex="1 1 auto"><Icon icon="stars" /></Flex>
            <Flex flex="1 1 auto"><Icon icon="stars" /></Flex>
        </FlexParent>
    ))
    .add('centered child', () => (
        <FlexParent justifyContent="center" alignItems="center" inline>
            <Icon icon="stars" color="success" scale="l" />
        </FlexParent>
    ));
