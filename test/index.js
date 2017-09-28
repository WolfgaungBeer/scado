import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import store from './store';
import { Theme, ToolBar, IconButton, Text, Tabs, Tab } from '../scado';
// import ThemeButtons from './Theme/ThemeButtons';
// import ToastButtons from './Toasts/ToastButtons';
import Form from './Form';

// const Root = () => (
//     <Provider store={store}>
//         <Theme>
//             <div>
//                 <ThemeButtons />
//                 <ToastButtons />
//                 <ToastContainer />
//                 <Form onSubmit={onFormSubmit} />
//             </div>
//         </Theme>
//     </Provider>
// );

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
                    <IconButton icon="dashboard" color="white" scale="xl" onClick={() => {}} />
                    <Text.Span color="white" scale="l" onClick={() => {}}>Scado</Text.Span>
                </ToolBar>
                <Router>
                    <div style={{ height: '100%' }}>
                        <Tabs>
                            <Tab><Link to="/forms">Forms</Link></Tab>
                            <Tab><Link to="/two">two</Link></Tab>
                            <Tab><Link to="/three">three</Link></Tab>
                        </Tabs>
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
