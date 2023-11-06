import { NavigationMenu } from "../NavigationMenu"
import { StyledFooter } from "./style"


export const Footer = () => {
    return (
    <StyledFooter className="container">
        <span>© 2023 All rights reserved.</span>
        <NavigationMenu />
    </StyledFooter>
    )
}