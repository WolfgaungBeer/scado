import React from 'react';
import { func, bool } from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { InputField, Button, Icon, Text } from '../../components/scado';

const propTypes = {
    handleSubmit: func.isRequired,
    valid: bool.isRequired,
    submitting: bool.isRequired,
};

const defaultProps = {};

const Form = ({ handleSubmit, valid, submitting }) => (
    <form onSubmit={handleSubmit}>
        <Field name="email" component={InputField} type="text" label="Email" required />
        <Field name="password" component={InputField} type="password" label="Password" required />
        <Button type="submit" color="success" disabled={!valid || submitting}>
            <Icon icon="person_add" loading={submitting} scale="xl" />
            <Text.Span scale="xl">Create Account!</Text.Span>
        </Button>
    </form>
);

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

const validate = (values) => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Bitte gib eine gültige Email Adresse ein';
    }
    if (!values.password) {
        errors.password = 'Bitte gib ein Passwort ein';
    }
    return errors;
};

const warn = (values) => {
    const warnings = {};
    if (values.password && values.password.length < 3) {
        warnings.password = 'Das Passwort sollte mindestens 3 Zeichen haben';
    }
    return warnings;
};

export default reduxForm({ form: 'testForm', validate, warn })(Form);
