import { NavigationMenu } from "../NavigationMenu"
import { StyledFooter } from "./style"


export const Footer = ({ $projects }: { $projects: boolean }) => {
    return (
    <StyledFooter className="container" $projects={$projects}>
        <span>© 2023 All rights reserved.</span>
        <NavigationMenu />
    </StyledFooter>
    )
}