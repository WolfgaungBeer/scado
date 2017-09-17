import React from 'react';
import renderer from 'react-test-renderer';
import Wrapper from '../../__mocks__/Wrapper';
import LabeledIcon from './';

it('renders the Icon Component correctly', () => {
    const tree1 = renderer.create(
        <Wrapper>
            <LabeledIcon icon="dashboard" label="Test" />
        </Wrapper>,
    ).toJSON();
    expect(tree1).toMatchSnapshot();

    const tree2 = renderer.create(
        <Wrapper>
            <LabeledIcon icon="dashboard" label="Test" color="error" scale="l" loading />
        </Wrapper>,
    ).toJSON();
    expect(tree2).toMatchSnapshot();

    const tree3 = renderer.create(
        <Wrapper>
            <LabeledIcon icon="dashboard" label="Test" color="error" scale="l" invert />
        </Wrapper>,
    ).toJSON();
    expect(tree3).toMatchSnapshot();
});
