import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: var(--background);
  padding-top: 100px;

  @media (max-width: 900px) {
    padding-top: 120px;
  }
`;

export const StyledListUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
