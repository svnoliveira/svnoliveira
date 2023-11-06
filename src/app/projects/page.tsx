'use client'

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectList } from "@/components/ProjectList";
import { GlobalStyle } from "@/styles/globalStyles";


export default function Projects() {

  return (
    <>
      <GlobalStyle />
      <Header $projects/>
      <main>
        <ProjectList />
      </main>
      <Footer $projects/>
    </>
  )
}
