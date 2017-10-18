'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FieldInput = exports.FieldWrapper = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    padding: 0.25rem 0 1rem 0;\n'], ['\n    padding: 0.25rem 0 1rem 0;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    margin: 0.25rem 0 0 0;\n    box-sizing: border-box;\n    width: 100%;\n    font-size: 1.2rem;\n    line-height: 1.8rem;\n    border-style: solid;\n    border-width: 1px;\n    border-color: ', ';\n    border-radius: 2px;\n    &:focus {\n        outline: none;\n    }\n'], ['\n    margin: 0.25rem 0 0 0;\n    box-sizing: border-box;\n    width: 100%;\n    font-size: 1.2rem;\n    line-height: 1.8rem;\n    border-style: solid;\n    border-width: 1px;\n    border-color: ', ';\n    border-radius: 2px;\n    &:focus {\n        outline: none;\n    }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FieldWrapper = exports.FieldWrapper = _styledComponents2.default.div(_templateObject);

var FieldInput = exports.FieldInput = _styledComponents2.default.input(_templateObject2, function (props) {
    return props.theme.color.lightGray;
});