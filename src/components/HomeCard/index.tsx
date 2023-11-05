import Image from "next/image";
import { StyledCardDiv, StyledDiv } from "./style";


export const HomeCard = () => {
    return (
        <StyledDiv>
            <StyledCardDiv>
                <h1>Projects</h1>
                <p>
                    Click to see examples of projects I have developed
                </p>
            </StyledCardDiv>
            <StyledCardDiv>
                <h1>Freelance</h1>
                <p>
                    Click to see details about solutions and products I can develop for your project
                </p>
            </StyledCardDiv>
        </StyledDiv>
    )
}