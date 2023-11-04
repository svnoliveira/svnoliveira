import { backEndTech, technologies } from "@/data/technologies"
import { TechCard } from "../TechCard"


export const TechList = () => {
    return (
        <section>
            <ul>{
                technologies.map((tech) => {
                    return <TechCard tech={tech} key={tech.id}/>
                })
            }
            </ul>
            <ul>{
                backEndTech.map((tech) => {
                    return <TechCard tech={tech} key={tech.id}/>
                })
            }
            </ul>
        </section>
    )
}