import styled from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const StyledCardDiv = styled.div`
    background-color: var(--background);
    padding: 40px;
    border: 3px solid var(--grey-dark);
    transition: 1s;

    cursor: pointer;
    h1 {
        padding-bottom: 30px;
    }
    &:hover {
        border-color: var(--grey);
    }
`