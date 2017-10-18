import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import ToastContainer from './ToastContainer';

const toasts = [
    { id: 'toast_1', type: 'error', content: 'This is a error toast!' },
    { id: 'toast_2', type: 'success', content: 'This is a success toast!' },
    { id: 'toast_3', type: 'info', content: 'This is a info toast!' },
    { id: 'toast_4', type: 'warning', content: 'This is a warning toast!' },
];

storiesOf('ToastContainer', module)
    .add('default', () => (
        <ToastContainer toasts={toasts} dismissToast={action('dismiss called')} />
    ))
    .add('with props', () => (
        <ToastContainer
            position={text('position', 'top-left')}
            toasts={toasts}
            dismissToast={action('dismiss called')}
        />
    ));
