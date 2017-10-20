'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    ', '\n'], ['\n    ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var propTypes = {
    scale: _propTypes.string,
    top: _propTypes.bool,
    left: _propTypes.bool,
    bottom: _propTypes.bool,
    right: _propTypes.bool,
    className: _propTypes.string,
    children: _propTypes.node
};

var defaultProps = {
    scale: undefined,
    top: undefined,
    left: undefined,
    bottom: undefined,
    right: undefined,
    className: undefined,
    children: undefined
};

var Spacing = _styledComponents2.default.div(_templateObject, (0, _helpers.getStyle)());

Spacing.propTypes = propTypes;
Spacing.defaultProps = defaultProps;

exports.default = Spacing;