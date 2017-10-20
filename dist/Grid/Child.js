'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    grid-area: ', ';\n'], ['\n    grid-area: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var propTypes = {
    area: _propTypes.string,
    className: _propTypes.string,
    children: _propTypes.node
};

var defaultProps = {
    area: undefined,
    className: undefined,
    children: undefined
};

var Child = _styledComponents2.default.div(_templateObject, function (props) {
    return props.area;
});

Child.propTypes = propTypes;
Child.defaultProps = defaultProps;

exports.default = Child;