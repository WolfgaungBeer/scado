import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Theme, ToastContainer } from '../scado';
import ThemeButtons from './Theme/ThemeButtons';
import ToastButtons from './Toasts/ToastButtons';
import Form from './form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const onFormSubmit = values => sleep(2000).then(() => console.log(values));

const Root = () => (
    <Provider store={store}>
        <Theme>
            <div>
                <ThemeButtons />
                <ToastButtons />
                <ToastContainer />
                <Form onSubmit={onFormSubmit} />
            </div>
        </Theme>
    </Provider>
);

render(<Root />, document.getElementById('root'));
