import { Styledbutton } from "../Buttons/style"
import { StyledSection } from "./style"


export const Contact = ({$language}:{$language?:string}) => {
    return (
        <StyledSection className="container">
            <h1 className="font-54px">
                {$language === "EN" ?
                "Invite me for your next project":
                "Me convide para seu Próximo projeto"}
            </h1>
            <a href="mailto:samueloliveirakenzie@gmail.com"
                target="_blank"
                rel="noopener noreferrer">
                <Styledbutton>    
                {$language === "EN" ?
                "Send an email":
                "Envie um email"}
                </Styledbutton>
            </a>
        </StyledSection>
    )
}