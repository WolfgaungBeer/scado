import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import store from './store';
import { Theme, ToolBar, Icon, Text } from '../src/scado';
import InlineForm from './InlineForm';
import Form from './Form';
import '../src/global.css';

const Wrapper = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
`;

const StyledLink = styled(Link)`
    text-transform: uppercase;
    margin-left: 1rem;
`;

const Root = () => (
    <Provider store={store}>
        <Theme>
            <Router>
                <Wrapper>
                    <ToolBar>
                        <Icon icon="dashboard" color="white" scale="xl" onClick={() => {}} />
                        <Text.Span color="white" scale="l" onClick={() => {}}>Scado</Text.Span>
                    </ToolBar>
                    <StyledLink to="inline-form">Inline Form</StyledLink>
                    <StyledLink to="form">Form</StyledLink>
                    <Route path="/inline-form" component={InlineForm} />
                    <Route path="/form" component={Form} />
                </Wrapper>
            </Router>
        </Theme>
    </Provider>
);

render(<Root />, document.getElementById('root'));
