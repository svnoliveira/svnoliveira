import Image from "next/image"
import { Styledbutton } from "../Buttons/style"
import { StyledCircleDiv, StyledContainerDiv, StyledSection } from "./style"
import self from "../../../public/base/self.png"
import Link from "next/link"


export const HomeSection = ({$language}:{$language?:string}) => {
    return (
        <StyledSection>
            <StyledCircleDiv>
                <Image 
                    src={self}
                    width={130}
                    height={130}
                    alt="Picture of Samuel Oliveira"
                />
            </StyledCircleDiv>
            <span className="font-16px">SAMUEL OLIVEIRA | FULL STACK WEB DEVELOPER</span>
            <StyledContainerDiv>
                <h1 className="font-54px">
                    {$language === "EN" ?
                    "Creating awesome pages and solutions for your Ideas":
                    "Criando incríveis páginas e soluções para suas ideias"}
                </h1>
            </StyledContainerDiv>
            <Link href={"/projects"}>
                <Styledbutton>
                {$language === "EN" ?
                    "Latest Project":
                    "Projeto Mais Recente"}
                </Styledbutton>
            </Link>
        </StyledSection>
    )
}