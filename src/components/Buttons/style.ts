import styled from "styled-components";


export const Styledbutton = styled.button<{ $language?: boolean}>`
    background-color: var(--background);
    border-radius: 5px;
    border: 2px solid var(--grey-dark);
    padding: ${props => props.$language ? "10px 30px":"18px 45px"};
    font-size: ${props => props.$language ? "12px":"18px"};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    transition: 0.3s;

    &:hover {
        transform: scale(0.95);
    }

    > div {
        position: relative;
        width: 20px;
        height: 20px;

        &::before {
            content: "";
            display: block;
            position: absolute;
            top: 3px;
            left: 0;
            width: 100%;
            height: 70%;
            background-color: rgba(0, 0, 0, 0.3);
            transition: 0.9s;
        }
    }

    > img {
        width: 100%;
        height: auto;
    }

    &:hover div::before{
        background-color: rgba(0, 0, 0, 0.001);
    }
`