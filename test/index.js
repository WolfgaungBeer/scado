import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import store from './store';
import { Theme, Animation, ToastContainer, Row, Column } from '../scado';
import ThemeButtons from './Theme/ThemeButtons';
import AnimationButtons from './Animation/AnimationButtons';
import ToastButtons from './Toasts/ToastButtons';

const GridContent = styled.div`
    height: 100px;
    background-color: ${props => props.theme.color[props.color]};
`;

const Root = () => {
    return (
        <Provider store={store}>
            <Theme>
                <div>
                    <ThemeButtons />
                    <AnimationButtons />
                    <ToastButtons />
                    <Animation id="button-animation" hideOnMount inline>
                        <div>Test</div>
                    </Animation>
                    <ToastContainer />
                    <Row gutter="s">
                        <Column s={12} m={6} l={4} xl={2}><GridContent color="success" /></Column>
                        <Column s={12} m={6} l={4} xl={2}><GridContent color="error" /></Column>
                        <Column s={12} m={6} l={4} xl={2}><GridContent color="warning" /></Column>
                        <Column s={12} m={6} l={4} xl={2}><GridContent color="success" /></Column>
                        <Column s={12} m={6} l={4} xl={2}><GridContent color="error" /></Column>
                        <Column s={12} m={6} l={4} xl={2}><GridContent color="warning" /></Column>
                    </Row>
                </div>
            </Theme>
        </Provider>
    );
};

render(<Root />, document.getElementById('root'));
