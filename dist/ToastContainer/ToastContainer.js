'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _styled = require('./styled');

var _Toast = require('./Toast');

var _Toast2 = _interopRequireDefault(_Toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    toasts: (0, _propTypes.arrayOf)((0, _propTypes.shape)({
        id: _propTypes.string,
        type: _propTypes.string,
        content: _propTypes.node,
        dismissTimeout: _propTypes.number,
        onClose: _propTypes.func
    })).isRequired,
    dismissToast: _propTypes.func.isRequired,
    position: _propTypes.string
};

var defaultProps = {
    position: 'bottom-right'
};

var ToastContainer = function (_PureComponent) {
    _inherits(ToastContainer, _PureComponent);

    function ToastContainer() {
        _classCallCheck(this, ToastContainer);

        return _possibleConstructorReturn(this, (ToastContainer.__proto__ || Object.getPrototypeOf(ToastContainer)).apply(this, arguments));
    }

    _createClass(ToastContainer, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var toasts = nextProps.toasts,
                dismissToast = nextProps.dismissToast;


            if (toasts && toasts.length > 0) {
                var oldToastIds = this.props.toasts.map(function (t) {
                    return t.id;
                });
                var newToasts = toasts.map(function (t) {
                    return oldToastIds.includes(t.id) ? undefined : t;
                }).filter(function (t) {
                    return t !== undefined;
                });
                newToasts.forEach(function (t) {
                    return setTimeout(function () {
                        return dismissToast(t.id);
                    }, t.dismissTimeout);
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                position = _props.position,
                toasts = _props.toasts,
                dismissToast = _props.dismissToast;

            var posArray = position.split(/[-]/);

            if (!toasts || toasts.length === 0) {
                return null;
            }

            return _react2.default.createElement(
                _styled.ToastContainerWrapper,
                { pos1: posArray[0], pos2: posArray[1] },
                toasts.map(function (t) {
                    return _react2.default.createElement(_Toast2.default, { key: t.id, type: t.type, content: t.content, onClose: function onClose() {
                            return dismissToast(t.id);
                        } });
                })
            );
        }
    }]);

    return ToastContainer;
}(_react.PureComponent);

ToastContainer.propTypes = propTypes;
ToastContainer.defaultProps = defaultProps;

exports.default = ToastContainer;