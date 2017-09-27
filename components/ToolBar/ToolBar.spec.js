import React from 'react';
import renderer from 'react-test-renderer';
import Wrapper from '../../__mocks__/Wrapper';
import ToolBar from './';
import IconButton from '../IconButton';
import Button from '../Button';

const click = () => {};

const ActionButtons = () => (
    <div>
        <IconButton icon="search" color="white" scale="l" onClick={click} />
        <IconButton icon="settings" color="white" scale="l" onClick={click} />
        <IconButton icon="keyboard_arrow_down" color="white" scale="l" onClick={click} />
    </div>
);

it('renders the ToolBar Component correctly', () => {
    const tree = renderer.create(
        <Wrapper>
            <ToolBar actionButtons={<ActionButtons />}>
                <IconButton icon="dashboard" color="white" scale="xl" onClick={click} />
                <Button buttonType="flat" color="white" scale="l" onClick={click}>Massiv App</Button>
            </ToolBar>
        </Wrapper>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
