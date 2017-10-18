'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _initialState = require('./initialState');

var _initialState2 = _interopRequireDefault(_initialState);

var _actionTypes = require('./actionTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default;
    var action = arguments[1];

    switch (action.type) {
        case _actionTypes.SET_THEME:
            {
                return _extends({}, action.payload);
            }
        default:
            {
                return state;
            }
    }
};

exports.default = reducer;