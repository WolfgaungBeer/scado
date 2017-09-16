import React from 'react';
import renderer from 'react-test-renderer';
import Wrapper from '../../__mocks__/Wrapper';
import IconButton from './';

const click = () => {};

it('renders the IconButton Component correctly', () => {
    const tree1 = renderer.create(
        <Wrapper>
            <IconButton icon="check_circle" onClick={click} />
        </Wrapper>,
    ).toJSON();
    expect(tree1).toMatchSnapshot();

    const tree2 = renderer.create(
        <Wrapper>
            <IconButton icon="check_circle" color="success" scale="l" onClick={click} />
        </Wrapper>,
    ).toJSON();
    expect(tree2).toMatchSnapshot();

    const tree3 = renderer.create(
        <Wrapper>
            <IconButton icon="check_circle" color="success" scale="l" loading onClick={click} />
        </Wrapper>,
    ).toJSON();
    expect(tree3).toMatchSnapshot();
});
