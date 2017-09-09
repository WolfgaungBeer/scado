import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import ToastContainer from './ToastContainer';

const toasts = [
    { id: 'toast_1', type: 'error', component: 'This is a error toast!' },
    { id: 'toast_2', type: 'success', component: 'This is a success toast!' },
    { id: 'toast_3', type: 'info', component: 'This is a info toast!' },
    { id: 'toast_4', type: 'warning', component: 'This is a warning toast!' }
];

storiesOf('ToastContainer', module)
    .add('default', () => (
        <ToastContainer toasts={toasts} dismissToast={() => {}} />
    ))
    .add('with a custom position', () => (
        <ToastContainer position="top-left" toasts={toasts} dismissToast={() => {}} />
    ));
