import React from 'react';
import renderer from 'react-test-renderer';
import Wrapper from '../../__mocks__/Wrapper';
import Button from './';

const click = () => {};

it('renders the Button Component correctly', () => {
    const tree1 = renderer.create(
        <Wrapper>
            <Button onClick={click}>TEST</Button>
        </Wrapper>,
    ).toJSON();
    expect(tree1).toMatchSnapshot();

    const tree2 = renderer.create(
        <Wrapper>
            <Button color="error" scale="l" onClick={click}>TEST</Button>
        </Wrapper>,
    ).toJSON();
    expect(tree2).toMatchSnapshot();

    const tree3 = renderer.create(
        <Wrapper>
            <Button buttonType="flat" color="error" scale="l" onClick={click}>TEST</Button>
        </Wrapper>,
    ).toJSON();
    expect(tree3).toMatchSnapshot();

    const tree4 = renderer.create(
        <Wrapper>
            <Button buttonType="border" color="error" scale="l" onClick={click}>TEST</Button>
        </Wrapper>,
    ).toJSON();
    expect(tree4).toMatchSnapshot();

    const tree5 = renderer.create(
        <Wrapper>
            <Button buttonType="raised" color="error" scale="l" onClick={click}>TEST</Button>
        </Wrapper>,
    ).toJSON();
    expect(tree5).toMatchSnapshot();

    const tree6 = renderer.create(
        <Wrapper>
            <Button buttonType="flat" onClick={click}>TEST</Button>
        </Wrapper>,
    ).toJSON();
    expect(tree6).toMatchSnapshot();

    const tree7 = renderer.create(
        <Wrapper>
            <Button buttonType="border" onClick={click}>TEST</Button>
        </Wrapper>,
    ).toJSON();
    expect(tree7).toMatchSnapshot();

    const tree8 = renderer.create(
        <Wrapper>
            <Button buttonType="raised" onClick={click}>TEST</Button>
        </Wrapper>,
    ).toJSON();
    expect(tree8).toMatchSnapshot();

    const tree9 = renderer.create(
        <Wrapper>
            <Button buttonType="raised" disabled onClick={click}>TEST</Button>
        </Wrapper>,
    ).toJSON();
    expect(tree9).toMatchSnapshot();
});
