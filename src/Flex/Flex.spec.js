import React from 'react';
import renderer from 'react-test-renderer';
import Wrapper from '../../__mocks__/Wrapper';
import Flex from './';

it('renders the Flex Component correctly', () => {
    const tree1 = renderer.create(
        <Wrapper>
            <Flex />
        </Wrapper>,
    ).toJSON();
    expect(tree1).toMatchSnapshot();

    const tree2 = renderer.create(
        <Wrapper>
            <Flex inline justifyContent="center" alignItems="center" />
        </Wrapper>,
    ).toJSON();
    expect(tree2).toMatchSnapshot();

    const tree3 = renderer.create(
        <Wrapper>
            <Flex flex="1 1 20%" />
        </Wrapper>,
    ).toJSON();
    expect(tree3).toMatchSnapshot();
});
