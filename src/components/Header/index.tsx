import { NavigationMenu } from "../NavigationMenu";
import Image from "next/image";
import mailIcon from "../../../public/icons/mail.svg";
import homeIcon from "../../../public/icons/home.svg";
import { StyledCircleDiv, StyledDiv, StyledHeader } from "./style";
import { LanguageButton } from "../Buttons/LanguageButton";
import Link from "next/link";
import { NavigationMenuMobile } from "../NavigationMenuMobile";
import { useEffect, useState } from "react";

interface IHeaderProps {
  $projects: boolean;
  $language?: string;
}

export const Header = ({ $projects, $language }: IHeaderProps) => {
  const [blurAmount, setBlurAmount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const blur = Math.min(scrollY / 20, 10);
      setBlurAmount(blur);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StyledHeader
      className="container"
      $projects={$projects}
      $blurAmount={blurAmount}
    >
      <StyledDiv>
        <StyledCircleDiv>
          <Image
            src={!$projects ? mailIcon : homeIcon}
            width={18}
            height={18}
            alt={`${$language === "EN" ? "Icon for a " : "Ícone de uma "}${
              $projects
                ? $language === "EN"
                  ? "house"
                  : "casa"
                : $language === "EN"
                  ? "mail letter"
                  : "carta de correio"
            }.`}
          />
        </StyledCircleDiv>

        {!$projects ? (
          <a
            className="font-12px"
            href="mailto:samueloliveirakenzie@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {`${$language == "EN" ? "Send an email" : "Mande um email"}`}
          </a>
        ) : (
          <Link className="font-12px" href={"/"}>
            {`${
              $language == "EN"
                ? "Back to Home page"
                : "Voltar para página inicial"
            }`}
          </Link>
        )}
      </StyledDiv>
      <NavigationMenu />
      <NavigationMenuMobile />
      <LanguageButton currentLanguage={$language} />
    </StyledHeader>
  );
};
