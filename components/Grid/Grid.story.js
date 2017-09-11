import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { Row, Column } from './';

const GridContent = styled.div`
    height: 100px;
    background-color: ${props => props.theme.color[props.color]};
`;

storiesOf('Grid', module)
    .add('default', () => (
        <Row>
            <Column s={12} m={6} l={4} xl={2}><GridContent color="success" /></Column>
            <Column s={12} m={6} l={4} xl={2}><GridContent color="error" /></Column>
            <Column s={12} m={6} l={4} xl={2}><GridContent color="warning" /></Column>
            <Column s={12} m={6} l={4} xl={2}><GridContent color="success" /></Column>
            <Column s={12} m={6} l={4} xl={2}><GridContent color="error" /></Column>
            <Column s={12} m={6} l={4} xl={2}><GridContent color="warning" /></Column>
        </Row>
    ))
    .add('with a gutter of size s', () => (
        <Row gutter="s">
            <Column s={12} m={6} l={4} xl={2}><GridContent color="success" /></Column>
            <Column s={12} m={6} l={4} xl={2}><GridContent color="error" /></Column>
            <Column s={12} m={6} l={4} xl={2}><GridContent color="warning" /></Column>
            <Column s={12} m={6} l={4} xl={2}><GridContent color="success" /></Column>
            <Column s={12} m={6} l={4} xl={2}><GridContent color="error" /></Column>
            <Column s={12} m={6} l={4} xl={2}><GridContent color="warning" /></Column>
        </Row>
    ));
