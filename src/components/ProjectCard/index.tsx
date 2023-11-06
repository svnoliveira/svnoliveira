
import { StyledCardLi, StyledContentDiv, StyledHeroImgDiv, StyledSubImgDiv } from "./style"

interface IProjectCardProps {
    project: {
        id: number,
        name: string,
        description: string,
        english: string,
        url: string
    }
}

export const ProjectCard = ({ project }: IProjectCardProps) => {
    return (
        <StyledCardLi className="panel">
            <StyledHeroImgDiv></StyledHeroImgDiv>
            <div className="container">
                <StyledContentDiv>
                    <div>
                        <h1>{project.name}</h1>
                        <p>Description</p>
                        <span>{`${project.english}`}</span>
                        <div>
                            <span>Website link <a href={project.url}><b>CLICK HERE</b></a></span>
                        </div>
                    </div>
                    <StyledSubImgDiv></StyledSubImgDiv>
                </StyledContentDiv>
            </div>
        </StyledCardLi>
    )
}