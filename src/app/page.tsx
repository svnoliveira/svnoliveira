'use client'
import { Contact } from "@/components/Contact";
import { HomeSection } from "@/components/HomeSection";
import { TechList } from "@/components/TechList";
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { GlobalStyle } from "@/styles/globalStyles";
import { HomeList } from "@/components/HomeList";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Home() {
  return (
    <>
      <GlobalStyle /> 
      <Header $projects={false} />
      <main>
        <HomeSection />
        <TechList />
        <HomeList />
        <Contact />
      </main>
      <Footer $projects={false}/>
    </>
  )
}
