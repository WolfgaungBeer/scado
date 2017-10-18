'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

var _actionTypes = require('./actionTypes');

var _initialState = require('./initialState');

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default;
    var action = arguments[1];

    switch (action.type) {
        case _actionTypes.SHOW_TOAST:
            {
                var newState = [].concat(_toConsumableArray(state));
                newState.push(_extends({}, action.payload, { id: (0, _v2.default)() }));
                return newState;
            }
        case _actionTypes.DISMISS_TOAST:
            {
                var _newState = state.filter(function (t) {
                    return t.id !== action.payload;
                });
                return _newState;
            }
        default:
            {
                return state;
            }
    }
};

exports.default = reducer;