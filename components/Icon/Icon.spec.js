import React from 'react';
import renderer from 'react-test-renderer';
import Theme from '../Theme/Theme';
import defaultTheme from '../Theme/defaultTheme';
import Icon from './';

it('renders the Icon Component correctly', () => {
    const tree1 = renderer.create(
        <Theme theme={defaultTheme}>
            <Icon icon="check_circle" />
        </Theme>,
    ).toJSON();
    expect(tree1).toMatchSnapshot();

    const tree2 = renderer.create(
        <Theme theme={defaultTheme}>
            <Icon icon="check_circle" color="success" scale="l" />
        </Theme>,
    ).toJSON();
    expect(tree2).toMatchSnapshot();

    const tree3 = renderer.create(
        <Theme theme={defaultTheme}>
            <Icon icon="check_circle" color="success" scale="l" loading />
        </Theme>,
    ).toJSON();
    expect(tree3).toMatchSnapshot();
});
