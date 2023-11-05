import styled from "styled-components";


export const StyledSection = styled.section`
    min-height: 65vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export const StyledCircleDiv = styled.div`
    border: solid 3px var(--grey-dark);
    border-radius: 50%;
    height: 130px;
    width: 130px;
    overflow: hidden;

    > img {
        filter: grayscale();
        object-fit: contain;
    }
`

export const StyledContainerDiv = styled.div`
    max-width: 550px;
    text-align: center;
`