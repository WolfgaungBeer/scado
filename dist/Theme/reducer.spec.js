'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _initialState = require('./initialState');

var _initialState2 = _interopRequireDefault(_initialState);

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('should return the initial state of the reducer', function () {
    var newState = (0, _reducer2.default)(undefined, {});
    expect(newState).toEqual(_initialState2.default);
});

it('should update the state correctly on the \'setTheme\' action', function () {
    var newTheme = _extends({}, _initialState2.default, { color: _extends({}, _initialState2.default.color, { success: '#00FF00' }) });
    var newState = (0, _reducer2.default)(_initialState2.default, _actions2.default.setTheme(newTheme));
    expect(newState).toEqual(newTheme);
});