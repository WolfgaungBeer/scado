import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Theme, Button, Animation } from '../scado';
import '../node_modules/material-design-icons/iconfont/material-icons.css';
import ThemeButtons from './Theme/ThemeButtons';
import AnimationButtons from './Animation/AnimationButtons';
import './styles.css';

const Root = () => {
    return (
        <Provider store={store}>
            <Theme>
                <div>
                    <ThemeButtons />
                    <AnimationButtons />
                    <Animation id="button-animation" hideOnMount>
                        <Button type="raised" color="error" scale="l" icon="code">Example Button</Button>
                    </Animation>
                </div>
            </Theme>
        </Provider>
    );
}

render(<Root />, document.getElementById('root'));
