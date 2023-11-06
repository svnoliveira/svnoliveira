import { NavigationMenu } from "../NavigationMenu"
import Image from "next/image"
import mailIcon from "../../../public/icons/mail.svg"
import homeIcon from "../../../public/icons/home.svg"
import { StyledCircleDiv, StyledDiv, StyledHeader } from "./style"
import { LanguageButton } from "../Buttons/LanguageButton"
import Link from "next/link"


export const Header = ({ $projects }: { $projects: boolean }) => {
    return (
        <StyledHeader className="container" $projects={$projects}>
            <StyledDiv >
                <StyledCircleDiv>
                    <Image
                        src={$projects ? homeIcon : mailIcon}
                        width={18}
                        height={18}
                        alt={
                            `Icon for a ${$projects ?
                                "house" :
                                "mail letter"
                            }.`
                        }
                    />
                </StyledCircleDiv>

                {
                    $projects ?
                        (<Link className="font-12px"
                            href={"/"}>
                            Back to HomePage
                        </Link>
                        ) : (
                        <a className="font-12px"
                            href="http://gmail.com"
                            target="_blank"
                            rel="noopener noreferrer">
                            Send an email
                        </a>)
                }
            </StyledDiv>
            <NavigationMenu />
            <LanguageButton />
        </StyledHeader>
    )
}