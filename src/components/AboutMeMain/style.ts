import styled from "styled-components";


export const StyledSection = styled.section`
    min-height: 65dvh;
    max-height: 75dvh;
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: justify;
    background-color: var(--background);
    border: solid 3px var(--grey);
    `

export const StyledDiv = styled.div`
    padding: clamp(5px, 10dvw, 45px);
    max-height: 75dvh;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    gap: 80px;
`