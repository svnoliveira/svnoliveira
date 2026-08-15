import styled from "styled-components";

export const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  z-index: -1;
  background-color: var(--background);

  img {
    object-fit: cover;
  }
`;
