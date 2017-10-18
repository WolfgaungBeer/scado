'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _Wrapper = require('../../__mocks__/Wrapper');

var _Wrapper2 = _interopRequireDefault(_Wrapper);

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('renders the Icon Component correctly', function () {
    var tree1 = _reactTestRenderer2.default.create(_react2.default.createElement(
        _Wrapper2.default,
        null,
        _react2.default.createElement(_2.default, { icon: 'check_circle' })
    )).toJSON();
    expect(tree1).toMatchSnapshot();

    var tree2 = _reactTestRenderer2.default.create(_react2.default.createElement(
        _Wrapper2.default,
        null,
        _react2.default.createElement(_2.default, { icon: 'check_circle', color: 'success', scale: 'l' })
    )).toJSON();
    expect(tree2).toMatchSnapshot();

    var tree3 = _reactTestRenderer2.default.create(_react2.default.createElement(
        _Wrapper2.default,
        null,
        _react2.default.createElement(_2.default, { icon: 'check_circle', color: 'success', scale: 'l', loading: true })
    )).toJSON();
    expect(tree3).toMatchSnapshot();
});