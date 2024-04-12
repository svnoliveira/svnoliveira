"use client";
import { backEndTech, technologies } from "@/data/technologies";
import { TechCard } from "../TechCard";
import { StyledSection, StyledUl } from "./style";
import { gsap } from "gsap";
import horizontalLoop from "@/styles/animations/horizontalLoop";
import { useEffect } from "react";

export const TechList = () => {
  // useEffect(() => {
  //     const boxes = gsap.utils.toArray(".box")
  //     horizontalLoop(boxes, { paused: false, repeat: -1 });
  // });
  // const addAnimation = () => {

  // }

  // if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  //     addAnimation();
  // }

  return (
    <StyledSection>
      <StyledUl>
        {technologies.map((tech) => {
          return <TechCard tech={tech} key={tech.id} />;
        })}
        {backEndTech.map((tech) => {
          return <TechCard tech={tech} key={tech.id} />;
        })}
        {technologies.map((tech) => {
          return <TechCard tech={tech} key={tech.id} />;
        })}
        {backEndTech.map((tech) => {
          return <TechCard tech={tech} key={tech.id} />;
        })}
      </StyledUl>
    </StyledSection>
  );
};
