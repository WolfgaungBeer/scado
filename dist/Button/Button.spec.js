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

var click = function click() {};

it('renders the Button Component correctly', function () {
    var tree1 = _reactTestRenderer2.default.create(_react2.default.createElement(
        _Wrapper2.default,
        null,
        _react2.default.createElement(
            _2.default,
            { onClick: click },
            'TEST'
        )
    )).toJSON();
    expect(tree1).toMatchSnapshot();

    var tree2 = _reactTestRenderer2.default.create(_react2.default.createElement(
        _Wrapper2.default,
        null,
        _react2.default.createElement(
            _2.default,
            { color: 'error', scale: 'l', onClick: click },
            'TEST'
        )
    )).toJSON();
    expect(tree2).toMatchSnapshot();

    var tree3 = _reactTestRenderer2.default.create(_react2.default.createElement(
        _Wrapper2.default,
        null,
        _react2.default.createElement(
            _2.default,
            { buttonType: 'flat', color: 'error', scale: 'l', onClick: click },
            'TEST'
        )
    )).toJSON();
    expect(tree3).toMatchSnapshot();

    var tree4 = _reactTestRenderer2.default.create(_react2.default.createElement(
        _Wrapper2.default,
        null,
        _react2.default.createElement(
            _2.default,
            { buttonType: 'border', color: 'error', scale: 'l', onClick: click },
            'TEST'
        )
    )).toJSON();
    expect(tree4).toMatchSnapshot();

    var tree5 = _reactTestRenderer2.default.create(_react2.default.createElement(
        _Wrapper2.default,
        null,
        _react2.default.createElement(
            _2.default,
            { buttonType: 'raised', color: 'error', scale: 'l', onClick: click },
            'TEST'
        )
    )).toJSON();
    expect(tree5).toMatchSnapshot();

    var tree6 = _reactTestRenderer2.default.create(_react2.default.createElement(
        _Wrapper2.default,
        null,
        _react2.default.createElement(
            _2.default,
            { buttonType: 'flat', onClick: click },
            'TEST'
        )
    )).toJSON();
    expect(tree6).toMatchSnapshot();

    var tree7 = _reactTestRenderer2.default.create(_react2.default.createElement(
        _Wrapper2.default,
        null,
        _react2.default.createElement(
            _2.default,
            { buttonType: 'border', onClick: click },
            'TEST'
        )
    )).toJSON();
    expect(tree7).toMatchSnapshot();

    var tree8 = _reactTestRenderer2.default.create(_react2.default.createElement(
        _Wrapper2.default,
        null,
        _react2.default.createElement(
            _2.default,
            { buttonType: 'raised', onClick: click },
            'TEST'
        )
    )).toJSON();
    expect(tree8).toMatchSnapshot();

    var tree9 = _reactTestRenderer2.default.create(_react2.default.createElement(
        _Wrapper2.default,
        null,
        _react2.default.createElement(
            _2.default,
            { buttonType: 'raised', disabled: true, onClick: click },
            'TEST'
        )
    )).toJSON();
    expect(tree9).toMatchSnapshot();
});