'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _selectors = require('./selectors');

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

var _ToastContainer = require('./ToastContainer');

var _ToastContainer2 = _interopRequireDefault(_ToastContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
    return {
        toasts: (0, _selectors.toasts)(state)
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        dismissToast: function dismissToast(id) {
            return dispatch(_actions2.default.dismissToast(id));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ToastContainer2.default);