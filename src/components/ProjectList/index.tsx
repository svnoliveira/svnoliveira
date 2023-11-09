'use client'
import { projects } from "@/data/projects"
import { ProjectCard } from "../ProjectCard"
import { StyledListUl, StyledSection } from "./style"
import { MutableRefObject, useEffect, useLayoutEffect, useRef, useState } from "react"

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/all"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const ProjectList = ({ $language }: { $language?: string }) => {

    const main = useRef<HTMLUListElement>(null);
    const scrollTween: MutableRefObject<GSAPTween | null | undefined> = useRef();
    const [ctx] = useState(gsap.context(() => { }, main));

    const goToSection = (i: number) => {
        ctx.data.forEach((e: { vars: { id: string }; kill: () => void }) => {
            if (e.vars && e.vars.id === 'scrollTween') {
                e.kill();
            }
        });
        ctx.add(() => {
            scrollTween.current = gsap.to(window, {
                scrollTo: { y: i * window.innerHeight, autoKill: false },
                duration: 1,
                id: 'scrollTween',
                onComplete: () => (scrollTween.current = null),
                overwrite: true,
            });
        });
    };

    const useIsomorphicLayoutEffect =
        typeof window !== 'undefined' ? useLayoutEffect : useEffect;

    useIsomorphicLayoutEffect(() => {
        ctx.add(() => {
            const panels: any[] = gsap.utils.toArray('.panel');
            panels.forEach((panel, i) => {
                ScrollTrigger.create({
                    trigger: panel,
                    start: 'top bottom',
                    end: '+=200%',
                    onToggle: (self) =>
                        self.isActive && !scrollTween.current && goToSection(i),
                });
            });
            ScrollTrigger.create({
                start: 0,
                end: 'max',
                snap: 1 / (panels.length - 1),
            });
        });
        return () => ctx.revert();
    }, []);


    return (
        <StyledSection>
            <StyledListUl ref={main}>
                <ProjectCard project={projects[projects.length - 1]} />
                {
                    projects.map((project, i) => {
                        if (i <= projects.length - 2) {
                            return <ProjectCard
                                project={project}
                                key={project.id}
                                $language={$language} />
                        }
                    })
                }
            </StyledListUl>
        </StyledSection>
    )
}