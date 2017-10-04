import React from 'react';
import styled from 'styled-components';
import Form from './Form';

const Wrapper = styled.div`
    margin-top: 3rem;
    width: 100%;
`;

const FormWrapper = styled.div`
    width: 60%;
    margin: auto;
`;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const onFormSubmit = values => sleep(2000).then(() => console.log(values)); // eslint-disable-line

const FormPage = () => (
    <Wrapper>
        <FormWrapper>
            <Form onSubmit={onFormSubmit} />
        </FormWrapper>
    </Wrapper>
);

export default FormPage;
