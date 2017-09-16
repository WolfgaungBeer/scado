import React from 'react';
import renderer from 'react-test-renderer';
import Wrapper from '../../__mocks__/Wrapper';
import { Row, Column } from './';

it('renders the Row and Column Component correctly', () => {
    const tree1 = renderer.create(
        <Wrapper>
            <Row>
                <Column s={12} m={12} l={6} xl={6}><div>test</div></Column>
                <Column s={12} m={12} l={6} xl={6}><div>test</div></Column>
            </Row>
        </Wrapper>,
    ).toJSON();
    expect(tree1).toMatchSnapshot();

    const tree2 = renderer.create(
        <Wrapper>
            <Row gutter="s s">
                <Column s={12} m={12} l={6} xl={6}><div>test</div></Column>
                <Column s={12} m={12} l={6} xl={6}><div>test</div></Column>
            </Row>
        </Wrapper>,
    ).toJSON();
    expect(tree2).toMatchSnapshot();
});
