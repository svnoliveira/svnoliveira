import styled from "styled-components";


export const StyledSection = styled.section`
    min-height: 65vh;
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

    @media (max-width: 1200px) {
        flex-direction: column;
    }

    img {
        filter: grayscale(1);
        cursor: pointer;
        object-fit: contain;
        transition: 1s;

        @media (max-width: 1200px) {
            height: auto;
            width: 100%;
        }

        &:hover {
            filter: grayscale(0.2);
            transform: scale(1.1);
        }
    }
`