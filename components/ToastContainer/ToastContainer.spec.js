import React from 'react';
import renderer from 'react-test-renderer';
import Wrapper from '../../__mocks__/Wrapper';
import ToastContainer from './';


it('renders the ToastContainer Component correctly', () => {
    const tree1 = renderer.create(
        <Wrapper>
            <ToastContainer />
        </Wrapper>,
    ).toJSON();
    expect(tree1).toMatchSnapshot();

    const tree2 = renderer.create(
        <Wrapper>
            <ToastContainer position="bottom-left" />
        </Wrapper>,
    ).toJSON();
    expect(tree2).toMatchSnapshot();
});
