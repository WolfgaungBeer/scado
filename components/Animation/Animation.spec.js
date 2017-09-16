import React from 'react';
import renderer from 'react-test-renderer';
import Wrapper from '../../__mocks__/Wrapper';
import Animation from './';

it('renders the Animation Component correctly', () => {
    const tree1 = renderer.create(
        <Wrapper>
            <Animation hideOnMount inline><div>test</div></Animation>
        </Wrapper>,
    ).toJSON();
    expect(tree1).toMatchSnapshot();

    const tree2 = renderer.create(
        <Wrapper>
            <Animation id="test1" inline><div>test</div></Animation>
        </Wrapper>,
    ).toJSON();
    expect(tree2).toMatchSnapshot();

    const tree3 = renderer.create(
        <Wrapper>
            <Animation id="test2"><div>test</div></Animation>
        </Wrapper>,
    ).toJSON();
    expect(tree3).toMatchSnapshot();
});
