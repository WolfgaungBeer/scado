import React from 'react';
import renderer from 'react-test-renderer';
import Wrapper from '../../__mocks__/Wrapper';
import ToolBar from './';
import Icon from '../Icon';
import Text from '../Text';

const click = () => {};

const ActionButtons = () => (
    <div>
        <Icon color="white" scale="l" onClick={click}>search</Icon>
        <Icon color="white" scale="l" onClick={click}>settings</Icon>
        <Icon color="white" scale="l" onClick={click}>keyboard_arrow_down</Icon>
    </div>
);

it('renders the ToolBar Component correctly', () => {
    const tree = renderer.create(
        <Wrapper>
            <ToolBar actionButtons={<ActionButtons />}>
                <Icon color="white" scale="xl" onClick={click}>dashboard</Icon>
                <Text.Span color="white" scale="l" onClick={click}>Massiv App</Text.Span>
            </ToolBar>
        </Wrapper>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
