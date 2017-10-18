'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonKnobs = require('@storybook/addon-knobs');

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Spacing', module).add('default', function () {
    return _react2.default.createElement(
        _2.default,
        null,
        'Spacing'
    );
}).add('with props', function () {
    return _react2.default.createElement(
        _2.default,
        {
            scale: (0, _addonKnobs.text)('scale', 'l'),
            top: (0, _addonKnobs.boolean)('top', false),
            left: (0, _addonKnobs.boolean)('left', false),
            bottom: (0, _addonKnobs.boolean)('bottom', false),
            right: (0, _addonKnobs.boolean)('right', false)
        },
        'Spacing'
    );
});