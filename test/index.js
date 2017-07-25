import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Theme } from '../scado';
import '../node_modules/material-design-icons/iconfont/material-icons.css';

const Root = () => {
    return (
        <Provider store={store}>
            <Theme>
                <div>
                    scado test
                </div>
            </Theme>
        </Provider>
    );
}

render(<Root />, document.getElementById('root'));
