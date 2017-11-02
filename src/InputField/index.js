import React from 'react';
import { oneOf, node, bool, string, func } from 'prop-types';
import fieldPropTypes from '../fieldPropTypes';
import defaultFieldPropTypes from '../defaultFieldPropTypes';
import { FieldWrapper, FieldInput } from './styled';
import Icon from '../Icon';
import Text from '../Text';

const propTypes = {
    ...fieldPropTypes,
    type: oneOf(['email', 'text', 'password', 'number', 'url']).isRequired,
    label: node,
    required: bool,
    className: string,
    onClick: func,
};

const defaultProps = {
    ...defaultFieldPropTypes,
    type: undefined,
    label: undefined,
    required: undefined,
    className: undefined,
    onClick: undefined,
};

const InputField = ({ input, meta, type, label, required, className, onClick }) => {
    const { touched, error, warning, form } = meta;
    const hasError = (touched && error);
    const hasWarning = (touched && warning);
    const id = `${form}-${input.name}`;
    return (
        <FieldWrapper className={className} onClick={onClick}>
            {label &&
                <Text.Label htmlFor={id}>{label} {required && <Text.Span color="error">*</Text.Span>}</Text.Label>}
            <FieldInput id={id} type={type} {...input} />
            {hasError &&
                <Text.Span color="error" scale="s"><Icon color="error" scale="s">clear</Icon> {error}</Text.Span>}
            {hasWarning &&
                <Text.Span color="warning" scale="s"><Icon color="warning" scale="s">warning</Icon> {warning}</Text.Span>}
        </FieldWrapper>
    );
};

InputField.propTypes = propTypes;
InputField.defaultProps = defaultProps;

export default InputField;
