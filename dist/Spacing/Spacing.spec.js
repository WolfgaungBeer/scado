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

it('renders the Spacing Component correctly', function () {
    var tree1 = _reactTestRenderer2.default.create(_react2.default.createElement(
        _Wrapper2.default,
        null,
        _react2.default.createElement(
            _2.default,
            null,
            'Spacing'
        )
    )).toJSON();
    expect(tree1).toMatchSnapshot();

    var tree2 = _reactTestRenderer2.default.create(_react2.default.createElement(
        _Wrapper2.default,
        null,
        _react2.default.createElement(
            _2.default,
            { scale: 'xxl', top: true },
            'Spacing'
        )
    )).toJSON();
    expect(tree2).toMatchSnapshot();

    var tree3 = _reactTestRenderer2.default.create(_react2.default.createElement(
        _Wrapper2.default,
        null,
        _react2.default.createElement(
            _2.default,
            { scale: 'xxl', left: true },
            'Spacing'
        )
    )).toJSON();
    expect(tree3).toMatchSnapshot();

    var tree4 = _reactTestRenderer2.default.create(_react2.default.createElement(
        _Wrapper2.default,
        null,
        _react2.default.createElement(
            _2.default,
            { scale: 'xxl', bottom: true },
            'Spacing'
        )
    )).toJSON();
    expect(tree4).toMatchSnapshot();

    var tree5 = _reactTestRenderer2.default.create(_react2.default.createElement(
        _Wrapper2.default,
        null,
        _react2.default.createElement(
            _2.default,
            { scale: 'xxl', right: true },
            'Spacing'
        )
    )).toJSON();
    expect(tree5).toMatchSnapshot();
});