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
                <Column s={12} m={12} l={4} xl={4}><GridContent color="success" /></Column>
                <Column s={12} m={12} l={4} xl={4}><GridContent color="error" /></Column>
                <Column s={12} m={12} l={4} xl={4}><GridContent color="warning" /></Column>
            </Row>
        </Theme>
    ))
    .add('with 2 elements', () => (
        <Theme theme={defaultTheme}>
            <Row>
                <Column s={12} m={12} l={6} xl={6}><GridContent color="success" /></Column>
                <Column s={12} m={12} l={6} xl={6}><GridContent color="error" /></Column>
            </Row>
        </Theme>
    ))
    .add('with 6 elements', () => (
        <Theme theme={defaultTheme}>
            <Row>
                <Column s={12} m={6} l={4} xl={2}><GridContent color="success" /></Column>
                <Column s={12} m={6} l={4} xl={2}><GridContent color="error" /></Column>
                <Column s={12} m={6} l={4} xl={2}><GridContent color="warning" /></Column>
                <Column s={12} m={6} l={4} xl={2}><GridContent color="success" /></Column>
                <Column s={12} m={6} l={4} xl={2}><GridContent color="error" /></Column>
                <Column s={12} m={6} l={4} xl={2}><GridContent color="warning" /></Column>
            </Row>
        </Theme>
    ))
    .add('main container and sidebar', () => (
        <Theme theme={defaultTheme}>
            <Row>
                <Column s={12} m={12} l={8} xl={8}><GridContent color="success" /></Column>
                <Column s={12} m={12} l={4} xl={4}><GridContent color="error" /></Column>
            </Row>
        </Theme>
    ))
    .add('default with gutter of size m', () => (
        <Theme theme={defaultTheme}>
            <Row gutter="m">
                <Column s={12} m={12} l={4} xl={4}><GridContent color="success" /></Column>
                <Column s={12} m={12} l={4} xl={4}><GridContent color="error" /></Column>
                <Column s={12} m={12} l={4} xl={4}><GridContent color="warning" /></Column>
            </Row>
        </Theme>
    ))
    .add('with 2 elements with gutter of size l', () => (
        <Theme theme={defaultTheme}>
            <Row gutter="l">
                <Column s={12} m={12} l={6} xl={6}><GridContent color="success" /></Column>
                <Column s={12} m={12} l={6} xl={6}><GridContent color="error" /></Column>
            </Row>
        </Theme>
    ))
    .add('with 6 elements with gutter of size s', () => (
        <Theme theme={defaultTheme}>
            <Row gutter="s">
                <Column s={12} m={6} l={4} xl={2}><GridContent color="success" /></Column>
                <Column s={12} m={6} l={4} xl={2}><GridContent color="error" /></Column>
                <Column s={12} m={6} l={4} xl={2}><GridContent color="warning" /></Column>
                <Column s={12} m={6} l={4} xl={2}><GridContent color="success" /></Column>
                <Column s={12} m={6} l={4} xl={2}><GridContent color="error" /></Column>
                <Column s={12} m={6} l={4} xl={2}><GridContent color="warning" /></Column>
            </Row>
        </Theme>
    ))
    .add('main container and sidebar with gutter of size m', () => (
        <Theme theme={defaultTheme}>
            <Row gutter="m">
                <Column s={12}><GridContent color="success" /></Column>
                <Column s={12}><GridContent color="error" /></Column>
            </Row>
        </Theme>
    ));
