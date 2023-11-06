import styled from "styled-components";


export const StyledHeader = styled.header<{ $projects?: boolean}>`
    height: 90px;
    width: 100%;
    border-bottom: 3px solid var(--grey-dark);
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: ${props => props.$projects ? "fixed":"relative"};
    top: 0;
    left: ${props => props.$projects ? "50%":"0"};
    transform: ${props => props.$projects ? "translate(-50%, 0)":"none"};

    > button {
        position: absolute;
        bottom: -41px;
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
