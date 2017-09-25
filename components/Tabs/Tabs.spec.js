import React from 'react';
import renderer from 'react-test-renderer';
import Wrapper from '../../__mocks__/Wrapper';
import { Tabs, Tab } from './';

it('renders the Text Component correctly', () => {
    const tree = renderer.create(
        <Wrapper>
            <Tabs>
                <Tab active onClick={() => {}}>tab 1</Tab>
                <Tab onClick={() => {}}>tab 2</Tab>
                <Tab onClick={() => {}}>tab 3</Tab>
            </Tabs>
        </Wrapper>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
