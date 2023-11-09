import { NavigationMenu } from "../NavigationMenu"
import Image from "next/image"
import mailIcon from "../../../public/icons/mail.svg"
import homeIcon from "../../../public/icons/home.svg"
import { StyledCircleDiv, StyledDiv, StyledHeader } from "./style"
import { LanguageButton } from "../Buttons/LanguageButton"
import Link from "next/link"
import { NavigationMenuMobile } from "../NavigationMenuMobile"


interface IHeaderProps {
  $projects: boolean,
  $language?: string
}

export const Header = ({ $projects, $language }: IHeaderProps) => {
  return (
    <StyledHeader className="container" $projects={$projects}>
      <StyledDiv >
        <StyledCircleDiv>
          <Image
            src={$projects ? homeIcon : mailIcon}
            width={18}
            height={18}
            alt={
              `${$language === "EN" ? "Icon for a " : "Ícone de uma "}${$projects ?
                $language === "EN" ? "house" : "casa" :
                $language === "EN" ? "mail letter" : "carta de correio"
              }.`
            }
          />
        </StyledCircleDiv>

        {
          $projects ?
            (<Link className="font-12px"
              href={"/"}>
              {`${$language == "EN" ?
                "Back to Home page" :
                "Voltar para página inicial"}`}
            </Link>
            ) : (
              <a className="font-12px"
                href="mailto:samueloliveirakenzie@gmail.com"
                target="_blank"
                rel="noopener noreferrer">
                {`${$language == "EN" ?
                  "Send an email" :
                  "Mande um email"}`}
              </a>)
        }
      </StyledDiv>
      <NavigationMenu />
      <NavigationMenuMobile />
      <LanguageButton currentLanguage={$language} />
    </StyledHeader>
  )
}