'use client'
import { backEndTech, technologies } from "@/data/technologies"
import { TechCard } from "../TechCard"
import { StyledUl } from "./style"
import { gsap } from "gsap";
import horizontalLoop from "@/styles/animations/horizontalLoop";
import { useEffect } from "react";


export const TechList = () => {

    useEffect(() => {
        const boxes = gsap.utils.toArray(".box")
        horizontalLoop(boxes, { paused: false, repeat: -1 });
    });

    return (
        <section>
            <StyledUl>{
                technologies.map((tech) => {
                    return <TechCard tech={tech} key={tech.id}/>
                })
            }{
                backEndTech.map((tech) => {
                    return <TechCard tech={tech} key={tech.id}/>
                })
            }
            </StyledUl>
        </section>
    )
}