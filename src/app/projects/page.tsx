'use client'

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectList } from "@/components/ProjectList";
import { GlobalStyle } from "@/styles/globalStyles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Projects() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <ProjectList />
      </main>
      <Footer />
    </>
  )
}
