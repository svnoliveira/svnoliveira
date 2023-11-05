import Image from "next/image"
import { Styledbutton } from "../Buttons/style"
import { StyledCircleDiv, StyledContainerDiv, StyledSection } from "./style"
import self from "../../../public/base/self.png"


export const HomeSection = () => {
    return (
        <StyledSection>
            <StyledCircleDiv>
                <Image 
                    src={self}
                    width={130}
                    height={130}
                    alt="Picture of Samuel Oliveira"
                />
            </StyledCircleDiv>
            <span>SAMUEL OLIVEIRA | FULL STACK WEB DEVELOPER</span>
            <StyledContainerDiv>
                <h1 className="font-54px">lorem ipsun title lorem ipsunlorem</h1>
            </StyledContainerDiv>
            <Styledbutton>Latest Project</Styledbutton>
        </StyledSection>
    )
}