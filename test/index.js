import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Theme, Button, Animation, ToastContainer } from '../scado';
import ThemeButtons from './Theme/ThemeButtons';
import AnimationButtons from './Animation/AnimationButtons';
import ToastButtons from './Toasts/ToastButtons';

const Root = () => {
    return (
        <Provider store={store}>
            <Theme>
                <div>
                    <ThemeButtons />
                    <AnimationButtons />
                    <ToastButtons />
                    <Animation id="button-animation" hideOnMount inline>
                        <Button type="raised" color="error" scale="l" icon="code">Example Button</Button>
                    </Animation>
                    <ToastContainer />
                </div>
            </Theme>
        </Provider>
    );
}

render(<Root />, document.getElementById('root'));
