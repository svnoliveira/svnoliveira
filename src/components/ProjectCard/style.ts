import styled from "styled-components";

export const StyledCardLi = styled.li`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    
    .container {
        position: relative;
    }
`

export const StyledHeroImgDiv = styled.div`
    width: 65%;
    height: 81vh;
    background-color: var(--grey);
    /* background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.2) 100%); */
`

export const StyledSubImgDiv = styled.div`
    height: 45vh;
    width: 400px;
    background-color: var(--grey);
`

export const StyledContentDiv = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    padding: 30px;
    background-color: var(--grey-dark);
`