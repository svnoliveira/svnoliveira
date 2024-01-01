'use client'

import { AboutMeMain } from "@/components/AboutMeMain";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useLanguageStore } from "@/context/languageStore";
import { GlobalStyle } from "@/styles/globalStyles";
import { useEffect } from "react";


export default function AboutMe() {

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
      <Header $projects $language={language}/>
      <main>
        <AboutMeMain $language={language}/>
      </main>
      <Footer $projects/>
    </>
  )
}
