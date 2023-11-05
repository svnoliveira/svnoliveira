import { StyledAnchor, StyledNavDropdownDiv, StyledNavDropdownLi, StyledNavUl } from "./style"


export const NavigationMenu = () => {
  return (
    <nav>
      <StyledNavUl>
        <li>
          <a href="https://www.linkedin.com/in/samuel-oliveira-4643351a1/"
            target="_blank"
            rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/svnoliveira/"
            target="_blank"
            rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <StyledNavDropdownLi>
          <span>Freelance</span>
          <StyledNavDropdownDiv>
            <StyledAnchor href="https://github.com/svnoliveira/"
              target="_blank"
              rel="noopener noreferrer">
              Workana
            </StyledAnchor>
            <StyledAnchor href="https://github.com/svnoliveira/"
              target="_blank"
              rel="noopener noreferrer">
              Upwork
            </StyledAnchor>
          </StyledNavDropdownDiv>
        </StyledNavDropdownLi>
      </StyledNavUl>
    </nav>
  )
}