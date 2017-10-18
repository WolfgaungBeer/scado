'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonKnobs = require('@storybook/addon-knobs');

var _ = require('./');

var _2 = _interopRequireDefault(_);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Text', module).add('H1', function () {
    return _react2.default.createElement(
        _2.default.H1,
        null,
        'Das ist ein Text'
    );
}).add('H2', function () {
    return _react2.default.createElement(
        _2.default.H2,
        null,
        'Das ist ein Text'
    );
}).add('H3', function () {
    return _react2.default.createElement(
        _2.default.H3,
        null,
        'Das ist ein Text'
    );
}).add('H4', function () {
    return _react2.default.createElement(
        _2.default.H4,
        null,
        'Das ist ein Text'
    );
}).add('H5', function () {
    return _react2.default.createElement(
        _2.default.H5,
        null,
        'Das ist ein Text'
    );
}).add('H6', function () {
    return _react2.default.createElement(
        _2.default.H6,
        null,
        'Das ist ein Text'
    );
}).add('P', function () {
    return _react2.default.createElement(
        _2.default.P,
        null,
        'Das ist ein Text'
    );
}).add('A', function () {
    return _react2.default.createElement(
        _2.default.A,
        null,
        'Das ist ein Text'
    );
}).add('Label', function () {
    return _react2.default.createElement(
        _2.default.Label,
        null,
        'Das ist ein Text'
    );
}).add('with props', function () {
    return _react2.default.createElement(
        _2.default.H1,
        {
            color: (0, _addonKnobs.text)('color', 'success'),
            scale: (0, _addonKnobs.text)('scale', 'l')
        },
        'Das ist ein Text'
    );
}).add('with an icon on the left side', function () {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Icon2.default, { icon: 'dashboard', color: 'success', scale: 'xl' }),
        _react2.default.createElement(
            _2.default.Span,
            { color: 'success', scale: 'xl' },
            'Das ist ein Text'
        )
    );
}).add('with an icon on the right side', function () {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _2.default.Span,
            { color: 'success', scale: 'xl' },
            'Das ist ein Text'
        ),
        _react2.default.createElement(_Icon2.default, { icon: 'dashboard', color: 'success', scale: 'xl' })
    );
}).add('with an nested icon', function () {
    return _react2.default.createElement(
        _2.default.Span,
        { color: 'success', scale: 'xl' },
        _react2.default.createElement(_Icon2.default, { icon: 'dashboard', color: 'success', scale: 'xl' }),
        'Das ist ein Text'
    );
});