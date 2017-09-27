import React from 'react';
import { oneOf, node, bool } from 'prop-types';
import fieldPropTypes from '../fieldPropTypes';
import defaultFieldPropTypes from '../defaultFieldPropTypes';
import { FieldWrapper, FieldLabel, FieldInput } from './styled';
import Icon from '../../Icon';
import Text from '../../Text';

const propTypes = {
    ...fieldPropTypes,
    type: oneOf(['email', 'text', 'password', 'number', 'url']).isRequired,
    label: node,
    required: bool,
};

const defaultProps = {
    ...defaultFieldPropTypes,
    type: undefined,
    label: undefined,
    required: undefined,
};

const InputField = ({ input, meta, type, label, required }) => {
    const { touched, error, warning, form } = meta;
    const hasError = (touched && error);
    const hasWarning = (touched && warning);
    const id = `${form}-${input.name}`;
    return (
        <FieldWrapper>
            {label &&
                <FieldLabel htmlFor={id}>{label} {required && <Text color="error">*</Text>}</FieldLabel>}
            <FieldInput id={id} type={type} {...input} />
            {hasError &&
                <Text color="error" scale="s"><Icon icon="clear" color="error" scale="s" /> {error}</Text>}
            {hasWarning &&
                <Text color="warning" scale="s"><Icon icon="warning" color="warning" scale="s" /> {warning}</Text>}
        </FieldWrapper>
    );
};

InputField.propTypes = propTypes;
InputField.defaultProps = defaultProps;

export default InputField;
