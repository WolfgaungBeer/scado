import React from 'react';
import renderer from 'react-test-renderer';
import Wrapper from '../../__mocks__/Wrapper';
import ToolBar from './';
import Icon from '../Icon';
import Text from '../Text';

const click = () => {};

const ActionButtons = () => (
    <div>
        <Icon icon="search" color="white" scale="l" onClick={click} />
        <Icon icon="settings" color="white" scale="l" onClick={click} />
        <Icon icon="keyboard_arrow_down" color="white" scale="l" onClick={click} />
    </div>
);

it('renders the ToolBar Component correctly', () => {
    const tree = renderer.create(
        <Wrapper>
            <ToolBar actionButtons={<ActionButtons />}>
                <Icon icon="dashboard" color="white" scale="xl" onClick={click} />
                <Text.Span color="white" scale="l" onClick={click}>Massiv App</Text.Span>
            </ToolBar>
        </Wrapper>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
