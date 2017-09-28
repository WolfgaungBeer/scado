import React from 'react';
import styled from 'styled-components';
import { Flex, Text } from '../../scado';
import Form from './Form';

const Wrapper = Flex.extend`
    width: 100%;
    height: 100%;
`;

const FormWrapper = styled.div`
    width: 40%;
`;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const onFormSubmit = values => sleep(2000).then(() => console.log(values)); // eslint-disable-line

const FormPage = () => (
    <Wrapper justifyContent="center" alignItems="center">
        <FormWrapper>
            <Text.H1 color="black" scale="xl">Neuen Account anlegen:</Text.H1>
            <Form onSubmit={onFormSubmit} />
        </FormWrapper>
    </Wrapper>
);

export default FormPage;
