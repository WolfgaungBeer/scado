'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dismissToast = exports.showToast = undefined;

var _actionTypes = require('./actionTypes');

var showToast = exports.showToast = function showToast(payload) {
  return { type: _actionTypes.SHOW_TOAST, payload: payload };
};
var dismissToast = exports.dismissToast = function dismissToast(payload) {
  return { type: _actionTypes.DISMISS_TOAST, payload: payload };
};

exports.default = { showToast: showToast, dismissToast: dismissToast };