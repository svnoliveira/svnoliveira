'use client'
import { Styledbutton } from "./style"
import Image from "next/image"
import brazilIcon from "../../../public/icons/brazil.svg"
import englishIcon from "../../../public/icons/uk-flag.svg"
import { useLanguageStore } from "@/context/languageStore"


export const LanguageButton = ({currentLanguage}:{currentLanguage?:string}) => {
    const {toggleLanguage} = useLanguageStore((state) => state);
    const handleButton = () =>{
        if (currentLanguage === "EN") {
            toggleLanguage("PT-BR")
            localStorage.setItem("SVNLanguage", "PT-BR")
        } else {
            toggleLanguage("EN")
            localStorage.setItem("SVNLanguage", "EN")
        }
    }

    return (
        <Styledbutton $language onClick={handleButton}>
            <span>
                {`${currentLanguage === "EN" ?
                "Click para ler em PT-BR" :
                "Click to read in English" }`}
            </span>
            <div>
                <Image
                    src={currentLanguage === "EN" ? brazilIcon : englishIcon}
                    width={20}
                    height={20}
                    alt="Icon of the language flag"
                />
            </div>
        </Styledbutton>
    )
}