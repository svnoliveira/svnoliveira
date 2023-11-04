import { Contact } from "@/components/Contact";
import { HomeSection } from "@/components/HomeSection";
import { ProjectList } from "@/components/ProjectList";
import { TechList } from "@/components/TechList";


export default function Home() {
  return (
    <main>
      <HomeSection />
      <TechList />
      <ProjectList />
      <Contact />
    </main>
  )
}
