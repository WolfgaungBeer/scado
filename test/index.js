import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import { Theme, ToolBar, Icon, Text } from '../scado';
import Form from './Form';

const Wrapper = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
`;

const Root = () => (
    <Provider store={store}>
        <Theme>
            <Wrapper>
                <ToolBar>
                    <Icon icon="dashboard" color="white" scale="xl" onClick={() => {}} />
                    <Text.Span color="white" scale="l" onClick={() => {}}>Scado</Text.Span>
                </ToolBar>
                <Router>
                    <div style={{ height: '100%' }}>
                        <Route path="/forms" component={Form} />
                        <Route path="/two" render={() => <div>two</div>} />
                        <Route path="/three" render={() => <div>three</div>} />
                    </div>
                </Router>
            </Wrapper>
        </Theme>
    </Provider>
);

render(<Root />, document.getElementById('root'));
