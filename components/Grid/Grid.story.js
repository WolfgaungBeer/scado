import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Theme from '../Theme/Theme';
import defaultTheme from '../Theme/defaultTheme';
import { Row, Column } from './';

const GridContent = styled.div`
    height: 100px;
    background-color: ${props => props.theme.color[props.color]};
`;

storiesOf('Grid', module)
    .add('default', () => (
        <Theme theme={defaultTheme}>
            <Row>
                <Column span={4}><GridContent color="success" /></Column>
                <Column span={4}><GridContent color="error" /></Column>
                <Column span={4}><GridContent color="warning" /></Column>
            </Row>
        </Theme>
    ))
    .add('with 2 elements', () => (
        <Theme theme={defaultTheme}>
            <Row>
                <Column span={6}><GridContent color="success" /></Column>
                <Column span={6}><GridContent color="error" /></Column>
            </Row>
        </Theme>
    ))
    .add('with 6 elements', () => (
        <Theme theme={defaultTheme}>
            <Row>
                <Column span={2}><GridContent color="success" /></Column>
                <Column span={2}><GridContent color="error" /></Column>
                <Column span={2}><GridContent color="warning" /></Column>
                <Column span={2}><GridContent color="success" /></Column>
                <Column span={2}><GridContent color="error" /></Column>
                <Column span={2}><GridContent color="warning" /></Column>
            </Row>
        </Theme>
    ))
    .add('main container and sidebar', () => (
        <Theme theme={defaultTheme}>
            <Row>
                <Column span={8}><GridContent color="success" /></Column>
                <Column span={4}><GridContent color="error" /></Column>
            </Row>
        </Theme>
    ))
    .add('default with gutter of size m', () => (
        <Theme theme={defaultTheme}>
            <Row gutter="m">
                <Column span={4}><GridContent color="success" /></Column>
                <Column span={4}><GridContent color="error" /></Column>
                <Column span={4}><GridContent color="warning" /></Column>
            </Row>
        </Theme>
    ))
    .add('with 2 elements with gutter of size l', () => (
        <Theme theme={defaultTheme}>
            <Row gutter="l">
                <Column span={6}><GridContent color="success" /></Column>
                <Column span={6}><GridContent color="error" /></Column>
            </Row>
        </Theme>
    ))
    .add('with 6 elements with gutter of size s', () => (
        <Theme theme={defaultTheme}>
            <Row gutter="s">
                <Column span={2}><GridContent color="success" /></Column>
                <Column span={2}><GridContent color="error" /></Column>
                <Column span={2}><GridContent color="warning" /></Column>
                <Column span={2}><GridContent color="success" /></Column>
                <Column span={2}><GridContent color="error" /></Column>
                <Column span={2}><GridContent color="warning" /></Column>
            </Row>
        </Theme>
    ))
    .add('main container and sidebar with gutter of size m', () => (
        <Theme theme={defaultTheme}>
            <Row gutter="m">
                <Column span={8}><GridContent color="success" /></Column>
                <Column span={4}><GridContent color="error" /></Column>
            </Row>
        </Theme>
    ));
