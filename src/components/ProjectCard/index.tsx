
import Image from "next/image"
import { StyledCardLi, StyledContentDiv, StyledHeroImgDiv, StyledSubImgDiv } from "./style"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

interface IProjectCardProps {
    project: {
        id: number,
        name: string,
        description: string,
        english: string,
        url: string
        video: string | undefined,
        heroImg: StaticImport | string,
        subImage: StaticImport | string,
    }
}

export const ProjectCard = ({ project }: IProjectCardProps) => {
    return (
        <StyledCardLi className="panel">
            <StyledHeroImgDiv>
                <iframe src={project.video} width="100%" height="100%"></iframe>
            </StyledHeroImgDiv>
            <div className="container">
                <StyledContentDiv>
                    <div>
                        <h1>{project.name}</h1>
                        <p>Description:</p>
                        <span>{`${project.english}`}</span>
                    </div>
                    <StyledSubImgDiv>
                        <a href={project.url}>
                            <Image
                                src={project.subImage}
                                height={440}
                                width={400}
                                alt="Smaller picture of the website"
                            />
                        </a>
                    </StyledSubImgDiv>
                    <div>
                        <span>Website link <a href={project.url}><b>CLICK HERE</b></a></span>
                    </div>
                </StyledContentDiv>
            </div>
        </StyledCardLi>
    )
}