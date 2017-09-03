import styled, { css } from 'styled-components';

const delta = 100 / 12;

const Column = styled.div`
    display: inline-block;
    width: ${props => {
        if (props.gutter) {
            const span = `${delta * props.span}%`;
            const gutter = props.theme.scale[props.gutter];
            return css`calc(${span} - ${gutter})`;
        } else {
            return css`${delta * props.span}%`};
        }
    }};
`;

export default Column;
