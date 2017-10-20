'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    display: ', ';\n    grid-template-columns: ', ';\n    grid-template-rows: ', ';\n    grid-template-areas: ', ';\n    grid-column-gap: ', ';\n    grid-row-gap: ', ';\n    width: 100%;\n    height: 100%;\n'], ['\n    display: ', ';\n    grid-template-columns: ', ';\n    grid-template-rows: ', ';\n    grid-template-areas: ', ';\n    grid-column-gap: ', ';\n    grid-row-gap: ', ';\n    width: 100%;\n    height: 100%;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var propTypes = {
    inline: _propTypes.bool,
    columns: _propTypes.string,
    rows: _propTypes.string,
    areas: _propTypes.string,
    columnGap: _propTypes.string,
    rowGap: _propTypes.string,
    className: _propTypes.string,
    children: _propTypes.node
};

var defaultProps = {
    inline: undefined,
    columns: undefined,
    rows: undefined,
    areas: undefined,
    columnGap: undefined,
    rowGap: undefined,
    className: undefined,
    children: undefined
};

var Parent = _styledComponents2.default.div(_templateObject, function (props) {
    return props.inline ? 'inline-grid' : 'grid';
}, function (props) {
    return props.columns;
}, function (props) {
    return props.rows;
}, function (props) {
    return props.areas;
}, function (props) {
    return props.columnGap;
}, function (props) {
    return props.rowGap;
});

Parent.propTypes = propTypes;
Parent.defaultProps = defaultProps;

exports.default = Parent;