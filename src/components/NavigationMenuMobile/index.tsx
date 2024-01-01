import Image from "next/image"
import menu from "../../../public/icons/menu.svg"
import { StyledAnchor, StyledNavDropdownDiv, StyledNavDropdownLi, StyledNavUl } from "./style"
import Link from "next/link"


export const NavigationMenuMobile = () => {
  return (
    <nav>
      <StyledNavUl>
        <StyledNavDropdownLi>
          <Image
            src={menu}
            height={40}
            width={40}
            alt="Menu icon" />
          <StyledNavDropdownDiv>
            <div>
              <Link href="/aboutme">
                About Me
              </Link>
            </div>
            <div>
              <StyledAnchor href="https://www.linkedin.com/in/samuel-oliveira-4643351a1/"
                target="_blank"
                rel="noopener noreferrer">
                LinkedIn
              </StyledAnchor>
            </div>
            <div>
              <StyledAnchor href="https://github.com/svnoliveira/"
                target="_blank"
                rel="noopener noreferrer">
                GitHub
              </StyledAnchor>
            </div>
            <div>
              <StyledAnchor href="https://www.workana.com/freelancer/82ee618492403c1264c6fc7c1276fa2c"
                target="_blank"
                rel="noopener noreferrer">
                Workana
              </StyledAnchor>
            </div>
            <div>
              <StyledAnchor href="https://www.upwork.com/freelancers/~011021e883bf086793"
                target="_blank"
                rel="noopener noreferrer">
                Upwork
              </StyledAnchor>
            </div>
          </StyledNavDropdownDiv>
        </StyledNavDropdownLi>
      </StyledNavUl>
    </nav>
  )
}