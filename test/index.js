import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Theme, Button } from '../scado';
import '../node_modules/material-design-icons/iconfont/material-icons.css';
import ThemeButtons from './Theme/ThemeButtons';

const Root = () => {
    return (
        <Provider store={store}>
            <Theme>
                <div>
                    <ThemeButtons />
                    <Button type="raised" color="error" icon="code">Example Button</Button>
                </div>
            </Theme>
        </Provider>
    );
}

render(<Root />, document.getElementById('root'));
