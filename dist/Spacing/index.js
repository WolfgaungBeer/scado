'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    margin-top: ', ';\n'], ['\n    margin-top: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var propTypes = {
    scale: _propTypes.string
};

var defaultProps = {
    scale: undefined
};

var Spacing = _styledComponents2.default.div(_templateObject, function (props) {
    return props.theme.scale[props.scale] || props.theme.scale.m;
});

Spacing.propTypes = propTypes;
Spacing.defaultProps = defaultProps;

exports.default = Spacing;