import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Theme from '../Theme/Theme';
import defaultTheme from '../Theme/defaultTheme';
import Icon from '../Icon';
import Flex from './';

import '../../node_modules/font-awesome/css/font-awesome.css';

const FlexParent = Flex.extend`
    width: 300px;
    height: 100px;
    background-color: #777777;
`;

storiesOf('Flex', module)
    .add('default', () => (
        <Theme theme={defaultTheme}>
            <FlexParent inline alignItems="center">
                <Flex flex="1 1 auto"><Icon icon="stars"/></Flex>
                <Flex flex="1 1 auto"><Icon icon="stars"/></Flex>
                <Flex flex="1 1 auto"><Icon icon="stars"/></Flex>
                <Flex flex="1 1 auto"><Icon icon="stars"/></Flex>
                <Flex flex="1 1 auto"><Icon icon="stars"/></Flex>
            </FlexParent>
        </Theme>
    ))
    .add('centered child', () => (
        <Theme theme={defaultTheme}>
            <FlexParent justifyContent="center" alignItems="center" inline>
                <Icon icon="stars" color="success" scale="l" />
            </FlexParent>
        </Theme>
    ));
