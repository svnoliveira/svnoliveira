import styled, { keyframes } from "styled-components";

export const scroll = keyframes`
    to {
        transform: translate(-50%);
    }
`
export const StyledSection = styled.section`
    max-width: 100vw;
    overflow: hidden;
    /* -webkit-mask: linear-gradient(90deg, transparent, white 1%, white 99%, transparent);
    mask: linear-gradient(90deg, transparent, white 1%, white 99%, transparent); */
    background-color: var(--background);
    border-top: solid 3px var(--grey-dark);
    border-bottom: solid 3px var(--grey-dark);
    min-height: 120px;
    margin-top: 40px;
    `

export const StyledUl = styled.ul`
    width: max-content;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    animation: ${scroll} 40s linear infinite;
`