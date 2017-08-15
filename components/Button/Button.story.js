import React from 'react';
import { storiesOf } from '@storybook/react';
import Theme from '../Theme/Theme';
import defaultTheme from '../Theme/defaultTheme';
import Button from './';


const click = () => alert('button clicked');

storiesOf('Button', module)
    .add('default', () => (
        <Theme theme={defaultTheme}>
            <Button onClick={click}>CLICK ME</Button>
        </Theme>
    ));
