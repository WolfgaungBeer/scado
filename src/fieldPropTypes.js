import { shape, string, func, bool } from 'prop-types';

const propTypes = {
    input: shape({
        name: string,
        value: string,
        onBlur: func,
        onChange: func,
        onDragStart: func,
        onDrop: func,
        onFocus: func,
    }),
    meta: shape({
        active: bool,
        asyncValidating: bool,
        autofilled: bool,
        dirty: bool,
        dispatch: func,
        error: string,
        form: string,
        initial: string,
        invalid: bool,
        pristine: bool,
        submitFailed: bool,
        submitting: bool,
        touched: bool,
        valid: bool,
        visited: bool,
        warning: string,
    }),
};

export default propTypes;
