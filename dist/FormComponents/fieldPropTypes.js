'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = require('prop-types');

var propTypes = {
    input: (0, _propTypes.shape)({
        name: _propTypes.string,
        value: _propTypes.string,
        onBlur: _propTypes.func,
        onChange: _propTypes.func,
        onDragStart: _propTypes.func,
        onDrop: _propTypes.func,
        onFocus: _propTypes.func
    }),
    meta: (0, _propTypes.shape)({
        active: _propTypes.bool,
        asyncValidating: _propTypes.bool,
        autofilled: _propTypes.bool,
        dirty: _propTypes.bool,
        dispatch: _propTypes.func,
        error: _propTypes.string,
        form: _propTypes.string,
        initial: _propTypes.string,
        invalid: _propTypes.bool,
        pristine: _propTypes.bool,
        submitFailed: _propTypes.bool,
        submitting: _propTypes.bool,
        touched: _propTypes.bool,
        valid: _propTypes.bool,
        visited: _propTypes.bool,
        warning: _propTypes.string
    })
};

exports.default = propTypes;