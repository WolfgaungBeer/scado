import React from 'react';
import renderer from 'react-test-renderer';
import Wrapper from '../../__mocks__/Wrapper';
import Spacing from './';

it('renders the Spacing Component correctly', () => {
    const tree1 = renderer.create(
        <Wrapper>
            <Spacing>Spacing</Spacing>
        </Wrapper>,
    ).toJSON();
    expect(tree1).toMatchSnapshot();

    const tree2 = renderer.create(
        <Wrapper>
            <Spacing scale="xxl" top>Spacing</Spacing>
        </Wrapper>,
    ).toJSON();
    expect(tree2).toMatchSnapshot();

    const tree3 = renderer.create(
        <Wrapper>
            <Spacing scale="xxl" left>Spacing</Spacing>
        </Wrapper>,
    ).toJSON();
    expect(tree3).toMatchSnapshot();

    const tree4 = renderer.create(
        <Wrapper>
            <Spacing scale="xxl" bottom>Spacing</Spacing>
        </Wrapper>,
    ).toJSON();
    expect(tree4).toMatchSnapshot();

    const tree5 = renderer.create(
        <Wrapper>
            <Spacing scale="xxl" right>Spacing</Spacing>
        </Wrapper>,
    ).toJSON();
    expect(tree5).toMatchSnapshot();
});
