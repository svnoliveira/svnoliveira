import Image from "next/image";
import { StyledBackground } from "./style";

export const StarBackground = () => {
  return (
    <StyledBackground className="absolute top-0 left-0 w-full h-full z-[-1]">
      <Image
        src="/base/stars.jpg"
        fill
        alt="Stars background"
        priority
        quality={85}
        style={{ objectFit: "cover" }}
      />
    </StyledBackground>
  );
};
