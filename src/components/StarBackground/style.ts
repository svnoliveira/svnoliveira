import styled from "styled-components";

export const StyledBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100dvw;
    height: 100dvh;
    z-index: -1;

    >img {
        max-width: 100dvw;
        max-height: 100dvh;
    }
`