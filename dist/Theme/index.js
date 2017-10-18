'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _selectors = require('./selectors');

var _Theme = require('./Theme');

var _Theme2 = _interopRequireDefault(_Theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
    return {
        theme: (0, _selectors.theme)(state)
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(_Theme2.default);