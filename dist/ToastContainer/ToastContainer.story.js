'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

var _addonKnobs = require('@storybook/addon-knobs');

var _ToastContainer = require('./ToastContainer');

var _ToastContainer2 = _interopRequireDefault(_ToastContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toasts = [{ id: 'toast_1', type: 'error', content: 'This is a error toast!' }, { id: 'toast_2', type: 'success', content: 'This is a success toast!' }, { id: 'toast_3', type: 'info', content: 'This is a info toast!' }, { id: 'toast_4', type: 'warning', content: 'This is a warning toast!' }];

(0, _react3.storiesOf)('ToastContainer', module).add('default', function () {
    return _react2.default.createElement(_ToastContainer2.default, { toasts: toasts, dismissToast: (0, _addonActions.action)('dismiss called') });
}).add('with props', function () {
    return _react2.default.createElement(_ToastContainer2.default, {
        position: (0, _addonKnobs.text)('position', 'top-left'),
        toasts: toasts,
        dismissToast: (0, _addonActions.action)('dismiss called')
    });
});