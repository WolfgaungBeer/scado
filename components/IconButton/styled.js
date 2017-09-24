import styled from 'styled-components';

export const StyledButton = styled.button`
    cursor: pointer;
    background-color: transparent;
    border-style: none;
    &:focus {
        outline: 0;
    }
    > i {
        padding: 0.25rem;
    }
`;
