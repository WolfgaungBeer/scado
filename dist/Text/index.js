'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['', ' ', ''], ['', ' ', '']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var propTypes = {
    color: _propTypes.string,
    scale: _propTypes.string,
    children: _propTypes.node
};

var defaultProps = {
    color: undefined,
    scale: undefined,
    children: undefined
};

var Text = {
    H1: _styledComponents2.default.h1(_templateObject, (0, _helpers.textStyle)(), (0, _helpers.font)('heading')),
    H2: _styledComponents2.default.h2(_templateObject, (0, _helpers.textStyle)(), (0, _helpers.font)('heading')),
    H3: _styledComponents2.default.h3(_templateObject, (0, _helpers.textStyle)(), (0, _helpers.font)('heading')),
    H4: _styledComponents2.default.h4(_templateObject, (0, _helpers.textStyle)(), (0, _helpers.font)('heading')),
    H5: _styledComponents2.default.h5(_templateObject, (0, _helpers.textStyle)(), (0, _helpers.font)('heading')),
    H6: _styledComponents2.default.h6(_templateObject, (0, _helpers.textStyle)(), (0, _helpers.font)('heading')),
    P: _styledComponents2.default.p(_templateObject, (0, _helpers.textStyle)(), (0, _helpers.font)('paragraph')),
    A: _styledComponents2.default.a(_templateObject, (0, _helpers.textStyle)(), (0, _helpers.font)('paragraph')),
    Label: _styledComponents2.default.label(_templateObject, (0, _helpers.textStyle)(), (0, _helpers.font)('paragraph')),
    Span: _styledComponents2.default.span(_templateObject, (0, _helpers.textStyle)(), (0, _helpers.font)('paragraph'))
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

exports.default = Text;