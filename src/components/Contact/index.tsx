import { Styledbutton } from "../Buttons/style"
import { StyledSection } from "./style"


export const Contact = () => {
    return (
        <StyledSection className="container">
            <h1 className="font-54px">Invite me for your next project</h1>
            <a href="mailto:samueloliveirakenzie@gmail.com"
                target="_blank"
                rel="noopener noreferrer">
                <Styledbutton>Send an email</Styledbutton>
            </a>
        </StyledSection>
    )
}