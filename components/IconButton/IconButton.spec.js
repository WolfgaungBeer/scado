import React from 'react';
import renderer from 'react-test-renderer';
import Theme from '../Theme/Theme';
import defaultTheme from '../Theme/defaultTheme';
import IconButton from './';

const click = () => {};

it('renders the Icon Component correctly', () => {
    const tree1 = renderer.create(
        <Theme theme={defaultTheme}>
            <IconButton icon="check_circle" onClick={click} />
        </Theme>,
    ).toJSON();
    expect(tree1).toMatchSnapshot();

    const tree2 = renderer.create(
        <Theme theme={defaultTheme}>
            <IconButton icon="check_circle" color="success" scale="l" onClick={click} />
        </Theme>,
    ).toJSON();
    expect(tree2).toMatchSnapshot();

    const tree3 = renderer.create(
        <Theme theme={defaultTheme}>
            <IconButton icon="check_circle" color="success" scale="l" loading onClick={click} />
        </Theme>,
    ).toJSON();
    expect(tree3).toMatchSnapshot();
});
