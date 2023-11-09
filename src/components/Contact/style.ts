import styled from "styled-components";


export const StyledSection = styled.section`
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    border-bottom: 3px solid var(--background);

    @media (max-width: 480px) {
        padding: 0 20px;

        > h1 {
            text-align: center;
        }
    }
`