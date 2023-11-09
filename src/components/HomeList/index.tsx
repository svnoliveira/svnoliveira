import Image from "next/image"
import { HomeCard } from "../HomeCard"
import { StyledSection, StyledUl } from "./style"
import collage from "../../../public/base/project-collages.png"
import Link from "next/link"


export const HomeList = ({$language}:{$language?:string}) => {
    return (
        <StyledSection className="container">
            <h1>
                {$language === "EN" ?
                "Experiences and Services":
                "Experiências e Serviços"}
            </h1>
            <StyledUl>
                <Link href="/projects">
                    <Image
                        src={collage}
                        width={590}
                        height={435}
                        alt="Collage about various projects"
                    />
                </Link>
                <HomeCard $language={$language}/>
            </StyledUl>
        </StyledSection>
    )
}