import styled from "styled-components";


export const StyledNavUl = styled.ul`
    display: none;
    align-items: center;
    justify-content: flex-end;
    gap: 15px;
    @media (max-width: 400px){
        display: flex;
    }
`

export const StyledNavDropdownLi = styled.li`
    display: flex;
    position: relative;
    cursor: pointer;
    &:hover > div {
        display: flex;
        flex-direction: column;
        gap: 25px;
        padding: 15px 0;
        border: 2px solid var(--grey-dark);
    }
`

export const StyledNavDropdownDiv = styled.div`
    display: none;
    position: absolute;
    top: 37px;
    right: -5px;
    background-color: var(--background);
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    `

export const StyledAnchor = styled.a`
    height: 100%;
    width: 100%;
    padding: 12px;
    transition: 1s;
    &:hover {
        background-color: var(--grey-dark);
        border-color: var(--grey);
    }
`