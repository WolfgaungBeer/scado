'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonKnobs = require('@storybook/addon-knobs');

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var errorMeta = { touched: true, error: 'This Field has an error' };
var warningMeta = { touched: true, warning: 'This Field has an warning' };

(0, _react3.storiesOf)('InputField', module).add('default', function () {
    return _react2.default.createElement(_2.default, { type: 'text', label: 'InputField Example' });
}).add('with error', function () {
    return _react2.default.createElement(_2.default, { type: 'text', label: 'InputField Example', meta: errorMeta });
}).add('with warning', function () {
    return _react2.default.createElement(_2.default, { type: 'text', label: 'InputField Example', meta: warningMeta });
}).add('with props', function () {
    return _react2.default.createElement(_2.default, {
        type: (0, _addonKnobs.text)('type', 'text'),
        label: (0, _addonKnobs.text)('label', 'InputField'),
        required: (0, _addonKnobs.boolean)('required', false)
    });
});