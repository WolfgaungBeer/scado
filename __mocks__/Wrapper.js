import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Theme, defaultTheme } from '../scado';

const mockStore = configureStore();
const store = mockStore({
    scado: {
        theme: defaultTheme,
        toasts: [
            { id: '1', type: 'success', content: 'Text', onClose: () => {} },
            { id: '2', type: 'error', content: 'Text', onClose: () => {} },
        ],
    },
});


const Wrapper = ({ children }) => ( // eslint-disable-line
    <Provider store={store}>
        <Theme>{children}</Theme>
    </Provider>
);

export default Wrapper;
