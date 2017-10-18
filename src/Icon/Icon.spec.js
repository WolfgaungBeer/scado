import React from 'react';
import renderer from 'react-test-renderer';
import Wrapper from '../../__mocks__/Wrapper';
import Icon from './';

it('renders the Icon Component correctly', () => {
    const tree1 = renderer.create(
        <Wrapper>
            <Icon>check_circle</Icon>
        </Wrapper>,
    ).toJSON();
    expect(tree1).toMatchSnapshot();

    const tree2 = renderer.create(
        <Wrapper>
            <Icon color="success" scale="l">check_circle</Icon>
        </Wrapper>,
    ).toJSON();
    expect(tree2).toMatchSnapshot();

    const tree3 = renderer.create(
        <Wrapper>
            <Icon color="success" scale="l" loading>check_circle</Icon>
        </Wrapper>,
    ).toJSON();
    expect(tree3).toMatchSnapshot();
});
