import Image from "next/image"
import { StyledCardLi } from "./style"

interface ITechCardProps {
    tech: {
        id: number,
        name: string,
        img: any
    }
}

export const TechCard = ({tech}: ITechCardProps) => {
    return (
        <StyledCardLi className="box">
            <Image
                src={tech.img}
                height={40}
                width={40}
                alt={`${tech.name} logo`}
            />
            <span className="font-28px">{tech.name}</span>
        </StyledCardLi>
    )
}