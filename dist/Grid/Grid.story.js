'use strict';

var _templateObject = _taggedTemplateLiteral(['\n    height: 100px;\n    background-color: ', ';\n'], ['\n    height: 100px;\n    background-color: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonKnobs = require('@storybook/addon-knobs');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GridContent = _styledComponents2.default.div(_templateObject, function (props) {
    return props.theme.color[props.color];
});

(0, _react3.storiesOf)('Grid', module).add('default', function () {
    return _react2.default.createElement(
        _.Row,
        null,
        _react2.default.createElement(
            _.Column,
            { s: 12, m: 6, l: 4, xl: 2 },
            _react2.default.createElement(GridContent, { color: 'success' })
        ),
        _react2.default.createElement(
            _.Column,
            { s: 12, m: 6, l: 4, xl: 2 },
            _react2.default.createElement(GridContent, { color: 'error' })
        ),
        _react2.default.createElement(
            _.Column,
            { s: 12, m: 6, l: 4, xl: 2 },
            _react2.default.createElement(GridContent, { color: 'warning' })
        ),
        _react2.default.createElement(
            _.Column,
            { s: 12, m: 6, l: 4, xl: 2 },
            _react2.default.createElement(GridContent, { color: 'success' })
        ),
        _react2.default.createElement(
            _.Column,
            { s: 12, m: 6, l: 4, xl: 2 },
            _react2.default.createElement(GridContent, { color: 'error' })
        ),
        _react2.default.createElement(
            _.Column,
            { s: 12, m: 6, l: 4, xl: 2 },
            _react2.default.createElement(GridContent, { color: 'warning' })
        )
    );
}).add('with props', function () {
    return _react2.default.createElement(
        _.Row,
        { gutter: (0, _addonKnobs.text)('gutter', 's s') },
        _react2.default.createElement(
            _.Column,
            { s: 12, m: 6, l: 4, xl: 2 },
            _react2.default.createElement(GridContent, { color: 'success' })
        ),
        _react2.default.createElement(
            _.Column,
            { s: 12, m: 6, l: 4, xl: 2 },
            _react2.default.createElement(GridContent, { color: 'error' })
        ),
        _react2.default.createElement(
            _.Column,
            { s: 12, m: 6, l: 4, xl: 2 },
            _react2.default.createElement(GridContent, { color: 'warning' })
        ),
        _react2.default.createElement(
            _.Column,
            { s: 12, m: 6, l: 4, xl: 2 },
            _react2.default.createElement(GridContent, { color: 'success' })
        ),
        _react2.default.createElement(
            _.Column,
            { s: 12, m: 6, l: 4, xl: 2 },
            _react2.default.createElement(GridContent, { color: 'error' })
        ),
        _react2.default.createElement(
            _.Column,
            { s: 12, m: 6, l: 4, xl: 2 },
            _react2.default.createElement(GridContent, { color: 'warning' })
        )
    );
});