'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var getStyle = exports.getStyle = function getStyle() {
    return function (props) {
        var scale = props.scale,
            left = props.left,
            bottom = props.bottom,
            right = props.right;

        var pos = 'top';
        if (left) pos = 'left';
        if (bottom) pos = 'bottom';
        if (right) pos = 'right';
        return 'padding-' + pos + ': ' + (props.theme.scale[scale] || props.theme.scale.m) + ';';
    };
};