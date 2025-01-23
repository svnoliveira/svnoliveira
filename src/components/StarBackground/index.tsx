import Image from "next/image"
import { StyledBackground } from "./style"

export const StarBackground = () => {
  return (
    <StyledBackground className="absolute top-0 left-0 w-full h-full z-[-1]">
        <Image src={"/base/stars.jpg"} height={2500} width={2500} alt="Stars"/>
    </StyledBackground>
  )
}

