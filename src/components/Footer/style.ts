import styled from "styled-components";

export const StyledFooter = styled.footer<{ $projects: boolean}>`
    height: 16vh;
    width: 100%;
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    position: ${props => props.$projects ? "fixed":"static"};
    bottom: 0;
    left: 50%;
    transform: ${props => props.$projects ? "translate(-50%, 0)":"none"};
    @media (max-width: 700px){
        justify-content: center;
        align-items: flex-end;
    }
`