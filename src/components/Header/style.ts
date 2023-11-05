import styled from "styled-components";


export const StyledHeader = styled.header`
    height: 90px;
    border-bottom: 3px solid var(--grey-dark);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    > button {
        position: absolute;
        bottom: -70px;
        left: 0;
    }
`

export const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const StyledCircleDiv = styled.div`
    height: 60px;
    width: 60px;
    background-color: var(--background);
    border: solid 2px var(--grey-dark);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`
