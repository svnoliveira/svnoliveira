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
    background-color: var(--black);
    iframe {
        border: none;
    }
`

export const StyledSubImgDiv = styled.div`
    height: 45vh;
    width: 400px;
    background-color: var(--grey-dark);
    overflow: hidden;
    img {
        object-fit: contain;
        padding: 15px 0;
        transition: 0.5s;
        &:hover {
            transform: scale(1.1);
        }
    }
`

export const StyledContentDiv = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    padding: 30px;
    background-color: var(--grey-dark);
`