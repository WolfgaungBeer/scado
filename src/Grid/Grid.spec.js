import React from 'react';
import styled from 'styled-components';
import renderer from 'react-test-renderer';
import Wrapper from '../../__mocks__/Wrapper';
import Grid from './';

const gridProps = {
    columns: 'auto',
    rows: '4rem 20rem',
    areas: '"header header" "sidebar body"',
    columnGap: '1rem',
    rowGap: '1rem',
};

const Panel = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.color.primary};
`;

it('renders the Flex Component correctly', () => {
    const tree1 = renderer.create(
        <Wrapper>
            <Grid.Parent {...gridProps}>
                <Grid.Child area="header"><Panel>Header</Panel></Grid.Child>
                <Grid.Child area="sidebar"><Panel>Sidebar</Panel></Grid.Child>
                <Grid.Child area="body"><Panel>Body</Panel></Grid.Child>
            </Grid.Parent>
        </Wrapper>,
    ).toJSON();
    expect(tree1).toMatchSnapshot();

    const tree2 = renderer.create(
        <Wrapper>
            <Grid.Parent {...gridProps} inline>
                <Grid.Child area="header"><Panel>Header</Panel></Grid.Child>
                <Grid.Child area="sidebar"><Panel>Sidebar</Panel></Grid.Child>
                <Grid.Child area="body"><Panel>Body</Panel></Grid.Child>
            </Grid.Parent>
        </Wrapper>,
    ).toJSON();
    expect(tree2).toMatchSnapshot();
});
