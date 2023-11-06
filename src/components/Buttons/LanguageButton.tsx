'use client'
import { Styledbutton } from "./style"
import Image from "next/image"
import brazilIcon from "../../../public/icons/brazil.svg"


export const LanguageButton = () => {
    return (
        <Styledbutton $language>
            <span>Click to Switch to PT-BR</span>
            <div>
                <Image
                    src={brazilIcon}
                    width={20}
                    height={20}
                    alt="Icon of the Brazilian flag"
                />
            </div>
        </Styledbutton>
    )
}