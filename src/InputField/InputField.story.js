import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import InputField from './';

const errorMeta = { touched: true, error: 'This Field has an error' };
const warningMeta = { touched: true, warning: 'This Field has an warning' };

storiesOf('InputField', module)
    .add('default', () => (
        <InputField type="text" label="InputField Example" />
    ))
    .add('with error', () => (
        <InputField type="text" label="InputField Example" meta={errorMeta} />
    ))
    .add('with warning', () => (
        <InputField type="text" label="InputField Example" meta={warningMeta} />
    ))
    .add('with props', () => (
        <InputField
            type={text('type', 'text')}
            label={text('label', 'InputField')}
            required={boolean('required', false)}
        />
    ));
