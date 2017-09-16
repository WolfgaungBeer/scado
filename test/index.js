import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Theme, ToastContainer } from '../scado';
import ThemeButtons from './Theme/ThemeButtons';
import ToastButtons from './Toasts/ToastButtons';

const Root = () => (
    <Provider store={store}>
        <Theme>
            <div>
                <ThemeButtons />
                <ToastButtons />
                <ToastContainer />
            </div>
        </Theme>
    </Provider>
);

render(<Root />, document.getElementById('root'));
