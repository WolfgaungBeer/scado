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

it('renders the Text Component correctly', function () {
    var tree1 = _reactTestRenderer2.default.create(_react2.default.createElement(
        _Wrapper2.default,
        null,
        _react2.default.createElement(
            _2.default.H1,
            null,
            'Das ist ein Text'
        )
    )).toJSON();
    expect(tree1).toMatchSnapshot();

    var tree2 = _reactTestRenderer2.default.create(_react2.default.createElement(
        _Wrapper2.default,
        null,
        _react2.default.createElement(
            _2.default.H2,
            null,
            'Das ist ein Text'
        )
    )).toJSON();
    expect(tree2).toMatchSnapshot();

    var tree3 = _reactTestRenderer2.default.create(_react2.default.createElement(
        _Wrapper2.default,
        null,
        _react2.default.createElement(
            _2.default.H3,
            null,
            'Das ist ein Text'
        )
    )).toJSON();
    expect(tree3).toMatchSnapshot();

    var tree4 = _reactTestRenderer2.default.create(_react2.default.createElement(
        _Wrapper2.default,
        null,
        _react2.default.createElement(
            _2.default.H4,
            null,
            'Das ist ein Text'
        )
    )).toJSON();
    expect(tree4).toMatchSnapshot();

    var tree5 = _reactTestRenderer2.default.create(_react2.default.createElement(
        _Wrapper2.default,
        null,
        _react2.default.createElement(
            _2.default.H5,
            null,
            'Das ist ein Text'
        )
    )).toJSON();
    expect(tree5).toMatchSnapshot();

    var tree6 = _reactTestRenderer2.default.create(_react2.default.createElement(
        _Wrapper2.default,
        null,
        _react2.default.createElement(
            _2.default.H6,
            null,
            'Das ist ein Text'
        )
    )).toJSON();
    expect(tree6).toMatchSnapshot();

    var tree7 = _reactTestRenderer2.default.create(_react2.default.createElement(
        _Wrapper2.default,
        null,
        _react2.default.createElement(
            _2.default.P,
            null,
            'Das ist ein Text'
        )
    )).toJSON();
    expect(tree7).toMatchSnapshot();

    var tree8 = _reactTestRenderer2.default.create(_react2.default.createElement(
        _Wrapper2.default,
        null,
        _react2.default.createElement(
            _2.default.A,
            null,
            'Das ist ein Text'
        )
    )).toJSON();
    expect(tree8).toMatchSnapshot();

    var tree9 = _reactTestRenderer2.default.create(_react2.default.createElement(
        _Wrapper2.default,
        null,
        _react2.default.createElement(
            _2.default.Span,
            null,
            'Das ist ein Text'
        )
    )).toJSON();
    expect(tree9).toMatchSnapshot();

    var tree10 = _reactTestRenderer2.default.create(_react2.default.createElement(
        _Wrapper2.default,
        null,
        _react2.default.createElement(
            _2.default.Label,
            null,
            'Das ist ein Text'
        )
    )).toJSON();
    expect(tree10).toMatchSnapshot();

    var tree11 = _reactTestRenderer2.default.create(_react2.default.createElement(
        _Wrapper2.default,
        null,
        _react2.default.createElement(
            _2.default.Span,
            { color: 'error', scale: 'xl' },
            'Das ist ein Text'
        )
    )).toJSON();
    expect(tree11).toMatchSnapshot();
});