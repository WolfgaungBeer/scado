import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import Flex from './';


const FlexParent = Flex.extend`
    width: 100%;
    height: 100px;
    background-color: #999999;
`;

const FlexChild = Flex.extend`
    width: 20px;
    height: 80px;
    background-color: ${props => props.theme.color.success};
`;


storiesOf('Flex', module)
    .add('default', () => (
        <FlexParent
            inline={boolean('inline', false)}
            justifyContent={text('justifyContent', 'space-around')}
            alignItems={text('alignItems', 'center')}
        >
            <FlexChild flex="0 1 auto" />
            <FlexChild flex="0 1 auto" />
            <FlexChild flex="0 1 auto" />
            <FlexChild flex="0 1 auto" />
            <FlexChild flex="0 1 auto" />
        </FlexParent>
    ))
    .add('children', () => {
        const flexChildText = text('flex', '0 1 auto');
        return (
            <FlexParent justifyContent="space-around" alignItems="center">
                <FlexChild flex={flexChildText} />
                <FlexChild flex={flexChildText} />
                <FlexChild flex={flexChildText} />
                <FlexChild flex={flexChildText} />
                <FlexChild flex={flexChildText} />
            </FlexParent>
        );
    });
