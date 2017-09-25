import styled, { css } from 'styled-components';
import Flex from '../Flex';

export const StyledTabs = Flex.extend`
    width: 100%;
`;

export const StyledTab = styled.div`
    cursor: pointer;
    display: inline-block;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    ${(props) => {
        if (props.active) {
            return css`
                border-bottom-style: solid;
                border-bottom-width: 2px;
                border-bottom-color: ${props.theme.color.darkGray};
            `;
        }
        return undefined;
    }};
`;
