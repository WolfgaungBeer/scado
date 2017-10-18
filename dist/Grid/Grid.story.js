'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    width: 100%;\n    height: 100%;\n    background-color: ', ';\n'], ['\n    width: 100%;\n    height: 100%;\n    background-color: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _react3 = require('@storybook/react');

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var gridProps = {
    columns: 'auto',
    rows: '4rem 20rem',
    areas: '"header header" "sidebar body"',
    columnGap: '1rem',
    rowGap: '1rem'
};

var Panel = _styledComponents2.default.div(_templateObject, function (props) {
    return props.theme.color.primary;
});

(0, _react3.storiesOf)('Grid', module).add('default', function () {
    return _react2.default.createElement(
        _2.default.Parent,
        gridProps,
        _react2.default.createElement(
            _2.default.Child,
            { area: 'header' },
            _react2.default.createElement(
                Panel,
                null,
                'Header'
            )
        ),
        _react2.default.createElement(
            _2.default.Child,
            { area: 'sidebar' },
            _react2.default.createElement(
                Panel,
                null,
                'Sidebar'
            )
        ),
        _react2.default.createElement(
            _2.default.Child,
            { area: 'body' },
            _react2.default.createElement(
                Panel,
                null,
                'Body'
            )
        )
    );
}).add('inline', function () {
    return _react2.default.createElement(
        _2.default.Parent,
        _extends({}, gridProps, { inline: true }),
        _react2.default.createElement(
            _2.default.Child,
            { area: 'header' },
            _react2.default.createElement(
                Panel,
                null,
                'Header'
            )
        ),
        _react2.default.createElement(
            _2.default.Child,
            { area: 'sidebar' },
            _react2.default.createElement(
                Panel,
                null,
                'Sidebar'
            )
        ),
        _react2.default.createElement(
            _2.default.Child,
            { area: 'body' },
            _react2.default.createElement(
                Panel,
                null,
                'Body'
            )
        )
    );
});