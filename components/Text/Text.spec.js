import React from 'react';
import renderer from 'react-test-renderer';
import Wrapper from '../../__mocks__/Wrapper';
import Text from './';

it('renders the Text Component correctly', () => {
    const tree1 = renderer.create(
        <Wrapper>
            <Text>Das ist ein Text</Text>
        </Wrapper>,
    ).toJSON();
    expect(tree1).toMatchSnapshot();

    const tree2 = renderer.create(
        <Wrapper>
            <Text color="error" scale="xl">Das ist ein Text</Text>
        </Wrapper>,
    ).toJSON();
    expect(tree2).toMatchSnapshot();
});
