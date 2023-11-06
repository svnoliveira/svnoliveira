import Image from "next/image"
import { HomeCard } from "../HomeCard"
import { StyledSection, StyledUl } from "./style"
import collage from "../../../public/base/project-collages.png"
import Link from "next/link"


export const HomeList = () => {
    return (
        <StyledSection className="container">
            <h1>Experiences and Services</h1>
            <StyledUl>
                <Link href="/projects">
                    <Image
                        src={collage}
                        width={590}
                        height={435}
                        alt="Collage about various projects"
                    />
                </Link>
                <HomeCard />
            </StyledUl>
        </StyledSection>
    )
}