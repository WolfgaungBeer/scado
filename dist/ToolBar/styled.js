'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ChildrenWrapper = exports.StyledToolBar = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    width: 100%;\n    height: ', ';\n    background-color: ', ';\n'], ['\n    width: 100%;\n    height: ', ';\n    background-color: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    height: 100%;\n'], ['\n    height: 100%;\n']);

var _Flex = require('../Flex');

var _Flex2 = _interopRequireDefault(_Flex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledToolBar = exports.StyledToolBar = _Flex2.default.extend(_templateObject, function (props) {
    return props.theme.scale.xxxl;
}, function (props) {
    return props.theme.color.primary;
});

var ChildrenWrapper = exports.ChildrenWrapper = _Flex2.default.extend(_templateObject2);