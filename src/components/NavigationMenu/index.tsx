import { StyledAnchor, StyledNav, StyledNavDropdownDiv, StyledNavDropdownLi, StyledNavUl } from "./style"


export const NavigationMenu = () => {
  return (
    <StyledNav>
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
            <StyledAnchor href="https://www.workana.com/freelancer/82ee618492403c1264c6fc7c1276fa2c"
              target="_blank"
              rel="noopener noreferrer">
              Workana
            </StyledAnchor>
            <StyledAnchor href="https://www.upwork.com/freelancers/~011021e883bf086793"
              target="_blank"
              rel="noopener noreferrer">
              Upwork
            </StyledAnchor>
          </StyledNavDropdownDiv>
        </StyledNavDropdownLi>
      </StyledNavUl>
    </StyledNav>
  )
}