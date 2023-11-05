import { NavigationMenu } from "../NavigationMenu"
import Image from "next/image"
import mailIcon from "../../../public/icons/mail.svg"
import { StyledCircleDiv, StyledDiv, StyledHeader} from "./style"
import { LanguageButton } from "../Buttons/LanguageButton"


export const Header = () => {
    return (
        <StyledHeader className="container">
            <StyledDiv >
                <StyledCircleDiv>
                    <Image
                        src={mailIcon}
                        width={18}
                        height={18}
                        alt="Icon for a mail letter"
                    />
                </StyledCircleDiv>
                <a className="font-12px"
                    href="http://gmail.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    Send an email
                </a>
            </StyledDiv>
            <NavigationMenu />
            <LanguageButton />
        </StyledHeader>
    )
}