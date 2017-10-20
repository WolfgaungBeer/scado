'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    display: ', ';\n    flex: ', ';\n    justify-content: ', ';\n    align-items: ', ';\n    width: 100%;\n    height: 100%;\n'], ['\n    display: ', ';\n    flex: ', ';\n    justify-content: ', ';\n    align-items: ', ';\n    width: 100%;\n    height: 100%;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var propTypes = {
    inline: _propTypes.bool,
    flex: _propTypes.string,
    justifyContent: _propTypes.string,
    alignItems: _propTypes.string,
    className: _propTypes.string
};

var defaultProps = {
    inline: undefined,
    flex: undefined,
    justifyContent: undefined,
    alignItems: undefined,
    className: undefined
};

var Flex = _styledComponents2.default.div(_templateObject, function (props) {
    return props.inline ? 'inline-flex' : 'flex';
}, function (props) {
    return props.flex || '0 1 auto';
}, function (props) {
    return props.justifyContent;
}, function (props) {
    return props.alignItems;
});

Flex.propTypes = propTypes;
Flex.defaultProps = defaultProps;
Flex.displayName = 'Flex';

exports.default = Flex;