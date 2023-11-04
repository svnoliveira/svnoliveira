interface IProjectCardProps {
    project: {
        id: number,
        name: string,
        description: string,
        english: string,
        url: string
    }
}

export const ProjectCard = ({project}:IProjectCardProps) => {
    return (
        <li>{project.name}</li>
    )
}