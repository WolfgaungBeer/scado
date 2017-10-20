'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var getShadow = exports.getShadow = function getShadow() {
    return function (props) {
        if (!props.shadow) return '';
        var shadowValue = props.theme.shadow[props.shadow];
        return shadowValue + ' ' + shadowValue + ' 5px 0px rgba(0,0,0,0.75);';
    };
};