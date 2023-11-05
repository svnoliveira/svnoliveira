'use client'
import { Contact } from "@/components/Contact";
import { HomeSection } from "@/components/HomeSection";
import { ProjectList } from "@/components/ProjectList";
import { TechList } from "@/components/TechList";
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { GlobalStyle } from "@/styles/globalStyles";


export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <HomeSection />
        <TechList />
        <ProjectList />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
