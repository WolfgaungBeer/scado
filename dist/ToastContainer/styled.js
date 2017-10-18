'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AbsoluteWrapper = exports.CloseButtonWrapper = exports.ComponentWrapper = exports.IconWrapper = exports.ToastWrapper = exports.ToastContainerWrapper = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    position: fixed;\n    ', ': 10px;\n    ', ': 10px;\n    z-index: 100;\n'], ['\n    position: fixed;\n    ', ': 10px;\n    ', ': 10px;\n    z-index: 100;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    width: 300px;\n    min-height: 50px;\n    margin-bottom: 20px;\n    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.45);\n'], ['\n    width: 300px;\n    min-height: 50px;\n    margin-bottom: 20px;\n    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.45);\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    background-color: ', ';\n'], ['\n    background-color: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    background-color: ', ';\n    padding: 0.5rem 1rem;\n'], ['\n    background-color: ', ';\n    padding: 0.5rem 1rem;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    background-color: ', ';\n    position: relative;\n'], ['\n    background-color: ', ';\n    position: relative;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n    position: absolute;\n    top: 2px;\n    right: -3px;\n'], ['\n    position: absolute;\n    top: 2px;\n    right: -3px;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Flex = require('../Flex');

var _Flex2 = _interopRequireDefault(_Flex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ToastContainerWrapper = exports.ToastContainerWrapper = _styledComponents2.default.div(_templateObject, function (props) {
    return props.pos1;
}, function (props) {
    return props.pos2;
});

var ToastWrapper = exports.ToastWrapper = (0, _styledComponents2.default)(_Flex2.default)(_templateObject2);

var IconWrapper = exports.IconWrapper = (0, _styledComponents2.default)(_Flex2.default)(_templateObject3, function (props) {
    return props.theme.color[props.color];
});

var ComponentWrapper = exports.ComponentWrapper = (0, _styledComponents2.default)(_Flex2.default)(_templateObject4, function (props) {
    return props.theme.color.white;
});

var CloseButtonWrapper = exports.CloseButtonWrapper = (0, _styledComponents2.default)(_Flex2.default)(_templateObject5, function (props) {
    return props.theme.color.white;
});

var AbsoluteWrapper = exports.AbsoluteWrapper = _styledComponents2.default.div(_templateObject6);