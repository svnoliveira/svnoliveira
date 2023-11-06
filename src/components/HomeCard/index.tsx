import { StyledCardDiv, StyledDiv } from "./style";
import Link from "next/link";


export const HomeCard = () => {
    return (
        <StyledDiv>
            <Link href="/projects">
                <StyledCardDiv>
                    <h1>Projects</h1>
                    <p>
                        Click to see examples of projects I have developed
                    </p>
                </StyledCardDiv>
            </Link>
            <a
                href="https://www.workana.com/freelancer/82ee618492403c1264c6fc7c1276fa2c"
                target="_blank"
                rel="noopener noreferrer">
                <StyledCardDiv>
                    <h1>Freelance</h1>
                    <p>
                        Click to see details about solutions and products I can develop for your project
                    </p>
                </StyledCardDiv>
            </a>
        </StyledDiv>
    )
}