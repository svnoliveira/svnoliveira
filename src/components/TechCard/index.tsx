
interface ITechCardProps {
    tech: {
        id: number,
        name: string,
        img: any
    }
}

export const TechCard = ({tech}: ITechCardProps) => {
    return (
        <li>{tech.name}</li>
    )
}