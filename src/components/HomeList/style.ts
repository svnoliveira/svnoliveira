import styled from "styled-components";


export const StyledSection = styled.section`
    height: 65vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
    border-bottom: solid 3px var(--background);
`

export const StyledUl = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 30px;

    img {
        filter: grayscale(1);
        cursor: pointer;
        transition: 1s;
        &:hover {
            filter: grayscale(0.2);
            transform: scale(1.1);
        }
    }
`