'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    display: inline-block;\n    box-sizing: border-box;\n    width: ', ';\n    padding: ', ' ', ';\n    @media screen and (min-width: ', ') {\n        width: ', ';\n    }\n    @media screen and (min-width: ', ') {\n        width: ', ';\n    }\n    @media screen and (min-width: ', ') {\n        width: ', ';\n    }\n    @media screen and (min-width: ', ') {\n        width: ', ';\n    }\n'], ['\n    display: inline-block;\n    box-sizing: border-box;\n    width: ', ';\n    padding: ', ' ', ';\n    @media screen and (min-width: ', ') {\n        width: ', ';\n    }\n    @media screen and (min-width: ', ') {\n        width: ', ';\n    }\n    @media screen and (min-width: ', ') {\n        width: ', ';\n    }\n    @media screen and (min-width: ', ') {\n        width: ', ';\n    }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var propTypes = {
    s: _propTypes.number.isRequired,
    m: _propTypes.number.isRequired,
    l: _propTypes.number.isRequired,
    xl: _propTypes.number.isRequired
};

var Column = _styledComponents2.default.div(_templateObject, (0, _helpers.getWidth)('s'), function (props) {
    return props.theme.scale[props.gutterV];
}, function (props) {
    return props.theme.scale[props.gutterH];
}, (0, _helpers.getBreakpoint)('s'), (0, _helpers.getWidth)('s'), (0, _helpers.getBreakpoint)('m'), (0, _helpers.getWidth)('m'), (0, _helpers.getBreakpoint)('l'), (0, _helpers.getWidth)('l'), (0, _helpers.getBreakpoint)('xl'), (0, _helpers.getWidth)('xl'));

Column.propTypes = propTypes;

exports.default = Column;