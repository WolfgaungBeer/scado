"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var textStyle = exports.textStyle = function textStyle() {
    return function (props) {
        return "\n    color: " + props.theme.color[props.color] + ";\n    font-size: " + props.theme.scale[props.scale] + ";\n    font-family: " + props.theme.fonts.paragraph + ";\n";
    };
};

var font = exports.font = function font(type) {
    return function (props) {
        return "\n    font-family: " + props.theme.fonts[type] + ";\n";
    };
};