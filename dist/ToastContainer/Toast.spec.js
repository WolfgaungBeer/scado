'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _Wrapper = require('../../__mocks__/Wrapper');

var _Wrapper2 = _interopRequireDefault(_Wrapper);

var _Toast = require('./Toast');

var _Toast2 = _interopRequireDefault(_Toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = _react2.default.createElement(
    'button',
    null,
    'Test'
);
var onClose = function onClose() {};

it('renders the Toast Component correctly', function () {
    var tree1 = _reactTestRenderer2.default.create(_react2.default.createElement(
        _Wrapper2.default,
        null,
        _react2.default.createElement(_Toast2.default, { id: '1', type: 'success', content: 'Text', onClose: onClose })
    )).toJSON();
    expect(tree1).toMatchSnapshot();

    var tree2 = _reactTestRenderer2.default.create(_react2.default.createElement(
        _Wrapper2.default,
        null,
        _react2.default.createElement(_Toast2.default, { id: '1', type: 'error', content: component, onClose: onClose })
    )).toJSON();
    expect(tree2).toMatchSnapshot();
});