'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actionTypes = require('./actionTypes');

var setTheme = function setTheme(payload) {
    return {
        type: _actionTypes.SET_THEME,
        payload: payload
    };
};

exports.default = {
    setTheme: setTheme
};