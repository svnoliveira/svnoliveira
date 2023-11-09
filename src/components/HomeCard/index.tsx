import { StyledCardDiv, StyledDiv } from "./style";
import Link from "next/link";


export const HomeCard = ({$language}:{$language?:string}) => {
    return (
        <StyledDiv>
            <Link href="/projects">
                <StyledCardDiv>
                    <h1>
                        {$language === "EN"?
                        "Projects":
                        "Projetos"}
                    </h1>
                    <p>
                        {$language === "EN"?
                        "Click to see examples of projects I have developed":
                        "Clique para ver exemplos de projetos desenvolvidos por mim"}
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
                        
                        {$language === "EN"?
                        "Click to see details about solutions and products I can develop for your project":
                        "Clique para ver detalhes sobre soluções e produtos eu posso desenvolver para seu projeto"}
                    </p>
                </StyledCardDiv>
            </a>
        </StyledDiv>
    )
}