import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Theme, Button, Animation, withAnimation } from '../scado';
import '../node_modules/material-design-icons/iconfont/material-icons.css';
import ThemeButtons from './Theme/ThemeButtons';
import AnimationButtons from './Animation/AnimationButtons';
import './styles.css';

const AnimatedButton = withAnimation('button-animation', true)(Button);

// const Root = () => {
//     return (
//         <Provider store={store}>
//             <Theme>
//                 <div>
//                     <ThemeButtons />
//                     <AnimationButtons />
//                     <Animation id="button-animation" hideOnMount>
//                         <Button type="raised" color="error" scale="l" icon="code">Example Button</Button>
//                     </Animation>
//                 </div>
//             </Theme>
//         </Provider>
//     );
// }

const Root = () => {
    return (
        <Provider store={store}>
            <Theme>
                <div>
                    <ThemeButtons />
                    <AnimationButtons />
                    <AnimatedButton type="raised" color="error" scale="l" icon="code">Example Button</AnimatedButton>
                </div>
            </Theme>
        </Provider>
    );
}

render(<Root />, document.getElementById('root'));
