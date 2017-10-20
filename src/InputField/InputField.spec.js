import React from 'react';
import renderer from 'react-test-renderer';
import Wrapper from '../../__mocks__/Wrapper';
import InputField from './';

const errorMeta = { touched: true, error: 'This Field has an error' };
const warningMeta = { touched: true, warning: 'This Field has an warning' };

it('renders the Icon Component correctly', () => {
    const tree1 = renderer.create(
        <Wrapper>
            <InputField type="text" />
        </Wrapper>,
    ).toJSON();
    expect(tree1).toMatchSnapshot();

    const tree2 = renderer.create(
        <Wrapper>
            <InputField type="text" meta={errorMeta} />
        </Wrapper>,
    ).toJSON();
    expect(tree2).toMatchSnapshot();

    const tree3 = renderer.create(
        <Wrapper>
            <InputField type="text" meta={warningMeta} />
        </Wrapper>,
    ).toJSON();
    expect(tree3).toMatchSnapshot();

    const tree4 = renderer.create(
        <Wrapper>
            <InputField type="text" required label="A InputField" />
        </Wrapper>,
    ).toJSON();
    expect(tree4).toMatchSnapshot();
});
