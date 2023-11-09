import styled from "styled-components";

export const StyledCardLi = styled.li`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 900px){
        flex-direction: column;
        padding-top: 11vh;
    }

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
        @media (max-width: 900px) and (orientation:landscape) {
            padding: 4vh 0;
        }
    }
    @media (max-width: 900px){
        width: 100%;
        height: 100vh;
    }
`

export const StyledSubImgDiv = styled.div`
    max-height: 45vh;
    max-width: 400px;
    background-color: var(--grey-dark);
    overflow: hidden;

    @media (max-width: 1200px){
        display: flex;
        justify-content: center;
    }
    img {
        object-fit: contain;
        padding: 15px 0;
        transition: 0.5s;
        &:hover {
            transform: scale(1.1);
        }
        @media (max-width: 1200px){
        height: 100%;
        width: auto;
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
    @media (max-width: 900px){
        position: static;
        transform: none;
        text-align: center
    }
    @media (max-width: 900px) and (orientation:landscape) {
        display: none;
    }
`