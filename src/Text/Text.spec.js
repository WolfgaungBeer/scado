import React from 'react';
import renderer from 'react-test-renderer';
import Wrapper from '../../__mocks__/Wrapper';
import Text from './';

it('renders the Text Component correctly', () => {
    const tree1 = renderer.create(
        <Wrapper>
            <Text.H1>Das ist ein Text</Text.H1>
        </Wrapper>,
    ).toJSON();
    expect(tree1).toMatchSnapshot();

    const tree2 = renderer.create(
        <Wrapper>
            <Text.H2>Das ist ein Text</Text.H2>
        </Wrapper>,
    ).toJSON();
    expect(tree2).toMatchSnapshot();

    const tree3 = renderer.create(
        <Wrapper>
            <Text.H3>Das ist ein Text</Text.H3>
        </Wrapper>,
    ).toJSON();
    expect(tree3).toMatchSnapshot();

    const tree4 = renderer.create(
        <Wrapper>
            <Text.H4>Das ist ein Text</Text.H4>
        </Wrapper>,
    ).toJSON();
    expect(tree4).toMatchSnapshot();

    const tree5 = renderer.create(
        <Wrapper>
            <Text.H5>Das ist ein Text</Text.H5>
        </Wrapper>,
    ).toJSON();
    expect(tree5).toMatchSnapshot();

    const tree6 = renderer.create(
        <Wrapper>
            <Text.H6>Das ist ein Text</Text.H6>
        </Wrapper>,
    ).toJSON();
    expect(tree6).toMatchSnapshot();

    const tree7 = renderer.create(
        <Wrapper>
            <Text.P>Das ist ein Text</Text.P>
        </Wrapper>,
    ).toJSON();
    expect(tree7).toMatchSnapshot();

    const tree8 = renderer.create(
        <Wrapper>
            <Text.A>Das ist ein Text</Text.A>
        </Wrapper>,
    ).toJSON();
    expect(tree8).toMatchSnapshot();

    const tree9 = renderer.create(
        <Wrapper>
            <Text.Span>Das ist ein Text</Text.Span>
        </Wrapper>,
    ).toJSON();
    expect(tree9).toMatchSnapshot();

    const tree10 = renderer.create(
        <Wrapper>
            <Text.Label>Das ist ein Text</Text.Label>
        </Wrapper>,
    ).toJSON();
    expect(tree10).toMatchSnapshot();

    const tree11 = renderer.create(
        <Wrapper>
            <Text.Span color="error" scale="xl">Das ist ein Text</Text.Span>
        </Wrapper>,
    ).toJSON();
    expect(tree11).toMatchSnapshot();
});
