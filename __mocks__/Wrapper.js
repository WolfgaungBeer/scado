import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Theme from '../components/Theme';
import defaultTheme from '../components/Theme/initialState';

const mockStore = configureStore();
const store = mockStore({
    scado: {
        theme: defaultTheme,
        toasts: [
            { id: '1', type: 'success', component: 'Text', onClose: () => {} },
            { id: '2', type: 'error', component: 'Text', onClose: () => {} },
        ],
        animations: {
            test1: { type: 'enter', className: 'testClass1' },
            test2: { type: 'leave', className: 'testClass2' },
        },
    },
});


const Wrapper = ({ children }) => ( // eslint-disable-line
    <Provider store={store}>
        <Theme>{children}</Theme>
    </Provider>
);

export default Wrapper;
