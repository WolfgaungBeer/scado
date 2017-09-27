import styled from 'styled-components';

export const FieldWrapper = styled.div`
    padding: 0.25rem 0 1rem 0;
`;

export const FieldLabel = styled.label`
    width: 100%;
    color: ${props => props.theme.color.black};
`;

export const FieldInput = styled.input`
    margin: 0.25rem 0 0 0;
    box-sizing: border-box;
    width: 100%;
    font-size: 1.2rem;
    line-height: 1.8rem;
    border-style: solid;
    border-width: 1px;
    border-color: ${props => props.theme.color.lightGray};
    border-radius: 4px;
`;
