import React from 'react';
import renderer from 'react-test-renderer';
import Wrapper from '../../__mocks__/Wrapper';
import Toast from './Toast';

const component = <button>Test</button>;
const onClose = () => {};

it('renders the Toast Component correctly', () => {
    const tree1 = renderer.create(
        <Wrapper>
            <Toast id="1" type="success" component="Text" onClose={onClose} />
        </Wrapper>,
    ).toJSON();
    expect(tree1).toMatchSnapshot();

    const tree2 = renderer.create(
        <Wrapper>
            <Toast id="1" type="error" component={component} onClose={onClose} />
        </Wrapper>,
    ).toJSON();
    expect(tree2).toMatchSnapshot();
});
