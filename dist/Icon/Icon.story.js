'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

var _addonKnobs = require('@storybook/addon-knobs');

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Icon', module).add('default', function () {
    return _react2.default.createElement(
        _2.default,
        null,
        'check_circle'
    );
}).add('with props', function () {
    return _react2.default.createElement(
        _2.default,
        {
            color: (0, _addonKnobs.text)('color', 'success'),
            scale: (0, _addonKnobs.text)('scale', 'l'),
            loading: (0, _addonKnobs.boolean)('loading', false),
            onClick: (0, _addonActions.action)('icon clicked')
        },
        'check_circle'
    );
});