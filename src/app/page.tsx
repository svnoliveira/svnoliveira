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
import { useEffect } from "react";
import { useLanguageStore } from "@/context/languageStore";


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);



export default function Home() {

  const {language, toggleLanguage} = useLanguageStore((state) => state);
  
  useEffect(() => {
    const autoLanguage = () =>{
      const languageStatus = localStorage.getItem("SVNLanguage");
      languageStatus === "EN" ? toggleLanguage("EN"): toggleLanguage("PT-BR");
    };
    autoLanguage();
  },[])

  return (
    <>
      <GlobalStyle /> 
      <Header $projects={false} $language={language}/>
      <main>
        <HomeSection $language={language}/>
        <TechList />
        <HomeList $language={language}/>
        <Contact $language={language}/>
      </main>
      <Footer $projects={false}/>
    </>
  )
}
