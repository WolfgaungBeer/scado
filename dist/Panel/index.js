'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    width: 100%;\n    background-color: ', ';\n    border-style: ', ';\n    border-width: 1px;\n    border-color: ', ';\n    border-radius: ', ';\n    box-sizing: border-box;\n    box-shadow: ', ';\n'], ['\n    width: 100%;\n    background-color: ', ';\n    border-style: ', ';\n    border-width: 1px;\n    border-color: ', ';\n    border-radius: ', ';\n    box-sizing: border-box;\n    box-shadow: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var propTypes = {
    backgroundColor: _propTypes.string,
    borderColor: _propTypes.string,
    borderRadius: _propTypes.string,
    shadow: _propTypes.string,
    className: _propTypes.string,
    children: _propTypes.node
};

var defaultProps = {
    backgroundColor: undefined,
    borderColor: undefined,
    borderRadius: undefined,
    shadow: undefined,
    className: undefined,
    children: undefined
};

var Panel = _styledComponents2.default.div(_templateObject, function (props) {
    return props.theme.color[props.backgroundColor];
}, function (props) {
    return props.borderColor && 'solid';
}, function (props) {
    return props.theme.color[props.borderColor];
}, function (props) {
    return props.theme.scale[props.borderRadius];
}, (0, _helpers.getShadow)());

Panel.propTypes = propTypes;
Panel.defaultProps = defaultProps;

exports.default = Panel;