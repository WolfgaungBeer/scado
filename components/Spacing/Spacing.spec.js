import React from 'react';
import renderer from 'react-test-renderer';
import Wrapper from '../../__mocks__/Wrapper';
import Spacing from './';

it('renders the Spacing Component correctly', () => {
    const tree1 = renderer.create(
        <Wrapper>
            <Spacing />
        </Wrapper>,
    ).toJSON();
    expect(tree1).toMatchSnapshot();

    const tree2 = renderer.create(
        <Wrapper>
            <Spacing scale="xxl" />
        </Wrapper>,
    ).toJSON();
    expect(tree2).toMatchSnapshot();
});
