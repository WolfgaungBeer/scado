'use strict';

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _initialState = require('./initialState');

var _initialState2 = _interopRequireDefault(_initialState);

var _actionTypes = require('./actionTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toast = { type: 'success', content: 'text', dismissTimeout: 3000 };

it('should return the initial state of the reducer', function () {
    var newState = (0, _reducer2.default)(undefined, {});
    expect(newState).toEqual(_initialState2.default);
});

it('should update the state correctly on the \'showToast\' action', function () {
    var newState = (0, _reducer2.default)(_initialState2.default, { type: _actionTypes.SHOW_TOAST, payload: toast });
    expect(newState.length).toEqual(1);
    var toastId = newState[0].id;
    var newState2 = (0, _reducer2.default)(newState, { type: _actionTypes.DISMISS_TOAST, payload: toastId });
    expect(newState2.length).toEqual(0);
});