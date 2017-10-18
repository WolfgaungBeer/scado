'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getFontColor = exports.getShadow = exports.getBorder = exports.getBackgroundColor = undefined;

var _templateObject = _taggedTemplateLiteral(['\n            border-style: solid;\n            border-width: 1px;\n            border-color: ', ';\n            border-radius: 2px;\n        '], ['\n            border-style: solid;\n            border-width: 1px;\n            border-color: ', ';\n            border-radius: 2px;\n        ']),
    _templateObject2 = _taggedTemplateLiteral(['\n            border-style: none;\n            border-radius: 2px;\n        '], ['\n            border-style: none;\n            border-radius: 2px;\n        ']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getBackgroundColor = exports.getBackgroundColor = function getBackgroundColor() {
    return function (props) {
        var type = props.buttonType;
        switch (type) {
            case 'flat':
            case 'border':
                return 'transparent';
            case 'raised':
                return props.color ? props.theme.color[props.color] : props.theme.color.primary;
            default:
                return props.color ? props.theme.color[props.color] : props.theme.color.primary;
        }
    };
};

var getBorder = exports.getBorder = function getBorder() {
    return function (props) {
        var type = props.buttonType;
        switch (type) {
            case 'flat':
                return 'border-style: none';
            case 'border':
                return (0, _styledComponents.css)(_templateObject, props.color ? props.theme.color[props.color] : props.theme.color.black);
            case 'raised':
                return (0, _styledComponents.css)(_templateObject, props.color ? props.theme.color[props.color] : props.theme.color.primary);
            default:
                return (0, _styledComponents.css)(_templateObject2);
        }
    };
};

var getShadow = exports.getShadow = function getShadow() {
    return function (props) {
        var type = props.buttonType;
        switch (type) {
            case 'raised':
                return 'box-shadow: 2px 2px 7px 0px rgba(87,87,87,0.7);';
            default:
                return undefined;
        }
    };
};

var getFontColor = exports.getFontColor = function getFontColor() {
    return function (props) {
        var type = props.buttonType;
        switch (type) {
            case 'flat':
            case 'border':
                return props.theme.color[props.color];
            default:
                return props.theme.color.white;
        }
    };
};