'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

var _addonKnobs = require('@storybook/addon-knobs');

var _ = require('./');

var _2 = _interopRequireDefault(_);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Button', module).add('default', function () {
    return _react2.default.createElement(
        _2.default,
        { onClick: (0, _addonActions.action)('clicked') },
        'Click me!'
    );
}).add('with props', function () {
    return _react2.default.createElement(
        _2.default,
        {
            buttonType: (0, _addonKnobs.text)('buttonType', 'flat'),
            color: (0, _addonKnobs.text)('color', 'success'),
            scale: (0, _addonKnobs.text)('scale', 'l'),
            onClick: (0, _addonActions.action)('clicked')
        },
        'Click me!'
    );
}).add('with a custom component', function () {
    return _react2.default.createElement(
        _2.default,
        { buttonType: 'raised', color: 'error', onClick: (0, _addonActions.action)('clicked') },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_Icon2.default, { icon: 'dashboard', color: 'white', scale: 'xl' }),
            _react2.default.createElement(
                _Text2.default.Span,
                { color: 'white', scale: 'xl' },
                'Das ist ein Text'
            )
        )
    );
});