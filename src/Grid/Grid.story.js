import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
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


storiesOf('Grid', module)
    .add('default', () => (
        <Grid.Parent {...gridProps}>
            <Grid.Child area="header"><Panel>Header</Panel></Grid.Child>
            <Grid.Child area="sidebar"><Panel>Sidebar</Panel></Grid.Child>
            <Grid.Child area="body"><Panel>Body</Panel></Grid.Child>
        </Grid.Parent>
    ))
    .add('inline', () => (
        <Grid.Parent {...gridProps} inline>
            <Grid.Child area="header"><Panel>Header</Panel></Grid.Child>
            <Grid.Child area="sidebar"><Panel>Sidebar</Panel></Grid.Child>
            <Grid.Child area="body"><Panel>Body</Panel></Grid.Child>
        </Grid.Parent>
    ));
