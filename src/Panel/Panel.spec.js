import React from 'react';
import renderer from 'react-test-renderer';
import Wrapper from '../../__mocks__/Wrapper';
import Panel from './';

it('renders the Icon Component correctly', () => {
    const tree1 = renderer.create(
        <Wrapper>
            <Panel>check_circle</Panel>
        </Wrapper>,
    ).toJSON();
    expect(tree1).toMatchSnapshot();

    const tree2 = renderer.create(
        <Wrapper>
            <Panel backgroundColor="error" borderColor="success">check_circle</Panel>
        </Wrapper>,
    ).toJSON();
    expect(tree2).toMatchSnapshot();

    const tree3 = renderer.create(
        <Wrapper>
            <Panel backgroundColor="white" borderRadius="xs" shadow="s" >check_circle</Panel>
        </Wrapper>,
    ).toJSON();
    expect(tree3).toMatchSnapshot();
});
