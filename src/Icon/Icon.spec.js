import React from 'react';
import renderer from 'react-test-renderer';
import Wrapper from '../../__mocks__/Wrapper';
import Icon from './';

it('renders the Icon Component correctly', () => {
    const tree1 = renderer.create(
        <Wrapper>
            <Icon icon="check_circle" />
        </Wrapper>,
    ).toJSON();
    expect(tree1).toMatchSnapshot();

    const tree2 = renderer.create(
        <Wrapper>
            <Icon icon="check_circle" color="success" scale="l" />
        </Wrapper>,
    ).toJSON();
    expect(tree2).toMatchSnapshot();

    const tree3 = renderer.create(
        <Wrapper>
            <Icon icon="check_circle" color="success" scale="l" loading />
        </Wrapper>,
    ).toJSON();
    expect(tree3).toMatchSnapshot();
});
