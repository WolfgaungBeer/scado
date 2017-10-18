"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var delta = 100 / 12;

var getBreakpoint = exports.getBreakpoint = function getBreakpoint(size) {
  return function (props) {
    return props.theme.screen[size];
  };
};
var getWidth = exports.getWidth = function getWidth(size) {
  return function (props) {
    return delta * props[size] + "%";
  };
};